import {Component, OnChanges, OnInit} from '@angular/core';
import {CourseItem} from '../courses-item.interface';
import {CoursesService} from '../courses.service';
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

  constructor(private _coursesFindPipe: CoursesFindPipe, private dataService: DataService) {
    console.log('Constructor in Courses List');
  }

  ngOnInit() {
    this.courseItems = CoursesService.getCoursesItems();
    this.dataService.dataSource.subscribe(this.findCourseByInput.bind(this));
    console.log('ngOnInit in Courses List');
  }

  ngOnChanges() {
    console.log('ngOnChange in Courses List!!!!!!!!!!!!!');
  }

  deleteCourse(id) {
    console.log(`Delete course with id ${id}`);
  }

  findCourseByInput(data): void {
    this.courseItems = this._coursesFindPipe.transform(CoursesService.getCoursesItems(), data);
  }

  loadMoreCourses() {
    console.log('Load More Courses!!!');
  }
}
