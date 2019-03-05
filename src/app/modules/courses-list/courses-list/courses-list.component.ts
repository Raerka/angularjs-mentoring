import { Component, OnChanges, OnInit } from '@angular/core';
import { CourseItem, CourseService } from '../../../services/course.service';
import { DataService } from '../../../services/data.service';
import { debounceTime } from 'rxjs/internal/operators';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as App from '../../../actions/app.actions';
import * as CoursesList from '../../../actions/courses-list.actions';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit, OnChanges {

  courseItems: CourseItem[] = [];
  private start = 0;
  private count = 4;

  constructor(
    private courseService: CourseService,
    private dataService: DataService,
    private store: Store<fromRoot.State>
  ) {
    store.pipe(select(fromRoot.getCoursesList)).subscribe(coursesList => this.courseItems = coursesList);
  }

  ngOnChanges() { }

  ngOnInit() {
    this.dataService.searchInputObservable.pipe(
      debounceTime(1000)
    ).subscribe(this.findCourseByInput.bind(this));
    this.init();
  }

  private init() {
    this.store.dispatch(new App.LoadingStart());
    this.courseService.getCurrentNumberCoursesItems(this.start, this.count).subscribe((res: CourseItem[]) => {
      this.store.dispatch(new CoursesList.FetchCoursesListSuccess({coursesList: res}));
      this.store.dispatch(new App.LoadingEnd());
    });
  }

  findCourseByInput(textFragment): void {
    this.store.dispatch(new App.LoadingStart());
    this.courseService.findCourseItemByTextInput(textFragment).subscribe((res: CourseItem[]) => {
      this.store.dispatch(new App.LoadingEnd());
      this.store.dispatch(new CoursesList.FetchCoursesListSuccess({coursesList: res.slice(0, 4)}));
    });
  }

  loadMoreCourses() {
    this.store.dispatch(new App.LoadingStart());
    this.start++;
    this.courseService.getCurrentNumberCoursesItems(this.start, this.count).subscribe((res: CourseItem[]) => {
      this.store.dispatch(new App.LoadingEnd());
      this.store.dispatch(new CoursesList.FetchCoursesListSuccess({coursesList: res}));
    });
  }

  loadCoursesFromBeginning() {
    this.store.dispatch(new App.LoadingStart());
    this.start = 0;
    this.courseService.getCurrentNumberCoursesItems(this.start, this.count).subscribe((res: CourseItem[]) => {
      this.store.dispatch(new App.LoadingEnd());
      this.store.dispatch(new CoursesList.FetchCoursesListSuccess({coursesList: res}));
    });
  }

  deleteCourse(id) {
    if (confirm('Do you really want to delete this textFragment?')) {
      this.courseService.removeCourseItemById(id).subscribe((res: any) => {
        if (res) {
          alert(`Course with id = ${id} was deleted`);
          this.init();
        }
      });
    }
  }
}
