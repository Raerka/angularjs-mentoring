import {Component, OnChanges, OnInit} from '@angular/core';
import {CourseItem, CourseService} from '../course.service';
import {CoursesFindPipe} from '../../pipes/courses-find.pipe';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  providers: [CoursesFindPipe]
})
export class CoursesListComponent implements OnInit, OnChanges {

  courseItems: CourseItem[] = [];

  constructor(private _coursesFindPipe: CoursesFindPipe, private dataService: DataService) { }

  ngOnInit() {
    this.courseItems = CourseService.getCoursesItems();
    this.dataService.dataSource.subscribe(this.findCourseByInput.bind(this));
  }

  ngOnChanges() { }

  deleteCourse(id) {
    if (confirm('Do you really want to delete this course?')) {
      CourseService.removeCourseItemById(this.courseItems, id);
    }
  }

  findCourseByInput(data): void {
    this.courseItems = this._coursesFindPipe.transform(CourseService.getCoursesItems(), data);
  }

  loadMoreCourses() {
    console.log('Load More Courses!!!');
  }
}
