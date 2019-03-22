import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { Author, CourseItem, CourseService } from '../../../services/course.service';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as App from '../../../actions/app.actions';

import * as CoursesList from '../../../actions/courses-list.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const TITLE_MAX_LENGTH = 50;
const DESCRIPTION_MAX_LENGTH = 500;
const DATE_PATTERN = /^\d{2}\/\d{2}\/\d{4}$/;
const LENGTH_PATTERN = /^[0-9]*$/;

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  id = null;
  isTopRated = false;
  allAuthors: Author[] = [];
  routerParams: any = {};
  formGroup: FormGroup = null;

  constructor(private courseService: CourseService,
              private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromRoot.State>,
              private fb: FormBuilder) {
    this.router.events.subscribe((event: RouterEvent) => {
      // console.log(event);
    });
    store.pipe(select(fromRoot.getAllAuthors)).subscribe(allAuthors => this.allAuthors = allAuthors);
  }

  ngOnInit() {
    this.init();
    this.createForm();
    this.initForm();
  }

  init() {
    this.store.dispatch(new App.LoadingStart());
    this.courseService.getAuthors().subscribe((res: Author[]) => {
      this.store.dispatch(new CoursesList.FetchAuthorsSuccess({allAuthors: res}));
      this.store.dispatch(new App.LoadingEnd());
    });
  }

  createForm() {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(TITLE_MAX_LENGTH)]],
      creationDate: ['', [Validators.required, Validators.pattern(DATE_PATTERN)]],
      length: [null, [Validators.required, Validators.pattern(LENGTH_PATTERN)]],
      description: ['', [Validators.required, Validators.maxLength(DESCRIPTION_MAX_LENGTH)]],
      authors: ['', [Validators.required]]
    });
  }

  initForm() {
    this.route.params.subscribe(data => {
      this.routerParams.id = data['id'];
    });
    if (this.routerParams.id) {
      this.store.pipe(select(fromRoot.getCourseItemById, {id: +this.routerParams.id}))
        .subscribe((courseItem: CourseItem) => {
          this.id = courseItem.id;
          this.isTopRated = courseItem.isTopRated;
          this.formGroup.setValue({
            name: courseItem.name,
            creationDate: courseItem.date,
            length: courseItem.length,
            description: courseItem.description,
            authors: this.getAuthorsNames(courseItem.authors)
          });
        });
    }
  }

  onClickSave() {
    const courseItem = this.createCourseItem();
    if (courseItem.id) {
      this.courseService.updateCoursesItem(courseItem);
    } else {
      this.courseService.createCoursesItem(courseItem);
    }
    this.gotoCoursesList();
  }

  onClickCancel() {
    this.gotoCoursesList();
  }

  getAuthorsNames(authors: Author[]): string[] {
    const authorsNames = [];
    authors.forEach(author => {
      authorsNames.push(`${author.firstName} ${author.lastName}`);
    });
    return authorsNames;
  }

  gotoCoursesList() {
    this.routerParams = {};
    this.router.navigate(['courses']);
  }

  createCourseItem() {
    return {
      id: this.id,
      name: this.formGroup.controls['name'].value,
      date: this.formGroup.controls['creationDate'].value,
      length: this.formGroup.controls['length'].value,
      isTopRated: this.isTopRated,
      description: this.formGroup.controls['description'].value,
      authors: this.formGroup.controls['authors'].value
    };
  }

  isValid() {
    if (!this.formGroup.controls['authors'].value.length) {
      return true;
    }
    return !this.formGroup.valid;
  }
}
