import { Component, OnChanges, OnInit } from '@angular/core';
import { CourseItem, CourseService } from '../../services/course.service';
import { DataService } from '../../services/data.service';

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
    this.dataService.dataSource.subscribe(this.findCourseByInput.bind(this));
    this.init();
  }

  private init() {
    this.courseService.getCurrentNumberCoursesItems(this.start, this.count).subscribe((res: CourseItem[]) => {
      this.courseItems = res;
    });
  }

  findCourseByInput(data): void {
    this.courseService.findCourseItemByTextInput(data).subscribe((res: CourseItem[]) => {
      this.courseItems = res.slice(0, 4);
    });
  }

  loadMoreCourses() {
    this.start++;
    this.courseService.getCurrentNumberCoursesItems(this.start, this.count).subscribe((res: CourseItem[]) => {
      this.courseItems = res;
    });
  }

  loadCoursesFromBeginning() {
    this.start = 0;
    this.courseService.getCurrentNumberCoursesItems(this.start, this.count).subscribe((res: CourseItem[]) => {
      this.courseItems = res;
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
