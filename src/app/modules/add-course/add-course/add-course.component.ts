import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { Author, CourseItem, CourseService } from '../../../services/course.service';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  public id = null;
  public name = '';
  public creationDate = '';
  public length = null;
  public description = '';
  public authors = '';
  public isTopRated = false;

  public routerParams: any = {};

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromRoot.State>
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      // console.log(event);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.routerParams.id = data['id'];
    });
    if (this.routerParams.id) {
      this.store.pipe(select(fromRoot.getCourseItemById, {id: +this.routerParams.id}))
        .subscribe((courseItem: CourseItem) => {
          this.id = courseItem.id;
          this.name = courseItem.name;
          this.creationDate = courseItem.date;
          this.length = courseItem.length;
          this.description = courseItem.description;
          this.authors = this.getAuthorsString(courseItem.authors);
          this.isTopRated = courseItem.isTopRated;
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

  getAuthorsString(authors: Author[]): string {
    let authorsString = '';
    authors.forEach(author => {
      authorsString += `${author.firstName} ${author.lastName}, `;
    });
    return authorsString;
  }

  gotoCoursesList() {
    this.routerParams = {};
    this.router.navigate(['courses']);
  }

  createCourseItem() {
    return {
      id: this.id,
      name: this.name,
      date: this.creationDate,
      length: this.length,
      isTopRated: this.isTopRated,
      description: this.description,
      authors: [{
        id: 123,
        firstName: this.authors,
        lastName: this.authors
      }]
    };
  }
}
