import {Component, OnChanges, OnInit} from '@angular/core';
import {CourseItem} from '../courses-item.interface';
import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit, OnChanges {

  courseItems: CourseItem[] = [];

  constructor() {
    console.log('Constructor in Courses List');
  }

  ngOnInit() {
    this.courseItems = CoursesService.getCoursesItems();
    console.log('ngOnInit in Courses List');
  }

  ngOnChanges() {
    console.log('ngOnChange in Courses List');
  }

  deleteCourse(id) {
    console.log(`Delete course with id ${id}`);
  }

  loadMoreCourses() {
    console.log('Load More Courses!!!');
  }
}
