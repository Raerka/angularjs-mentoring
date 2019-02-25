import { Component, OnChanges, OnInit } from '@angular/core';
import { CourseItem, CourseService } from '../../services/course.service';
import { DataService } from '../../services/data.service';
import { debounceTime } from 'rxjs/internal/operators';

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
    private dataService: DataService
  ) { }

  ngOnChanges() { }

  ngOnInit() {
    this.dataService.searchInputObservable.pipe(
      debounceTime(1000)
    ).subscribe(this.findCourseByInput.bind(this));
    this.init();
  }

  private init() {
    this.dataService.changeSpinnerStateValue(true);
    this.courseService.getCurrentNumberCoursesItems(this.start, this.count).subscribe((res: CourseItem[]) => {
      this.courseItems = res;
      this.dataService.changeSpinnerStateValue(false);
    });
  }

  findCourseByInput(textFragment): void {
    this.dataService.changeSpinnerStateValue(true);
    this.courseService.findCourseItemByTextInput(textFragment).subscribe((res: CourseItem[]) => {
      this.courseItems = res.slice(0, 4);
      this.dataService.changeSpinnerStateValue(false);
    });
  }

  loadMoreCourses() {
    this.dataService.changeSpinnerStateValue(true);
    this.start++;
    this.courseService.getCurrentNumberCoursesItems(this.start, this.count).subscribe((res: CourseItem[]) => {
      this.courseItems = res;
      this.dataService.changeSpinnerStateValue(false);
    });
  }

  loadCoursesFromBeginning() {
    this.dataService.changeSpinnerStateValue(true);
    this.start = 0;
    this.courseService.getCurrentNumberCoursesItems(this.start, this.count).subscribe((res: CourseItem[]) => {
      this.courseItems = res;
      this.dataService.changeSpinnerStateValue(false);
    });
  }

  deleteCourse(id) {
    if (confirm('Do you really want to delete this textFragment?')) {
      this.dataService.changeSpinnerStateValue(true);
      this.courseService.removeCourseItemById(id).subscribe((res: any) => {
        if (res) {
          alert(`Course with id = ${id} was deleted`);
          this.init();
        }
      });
    }
  }
}
