import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {CourseItem} from '../courses.service';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css']
})
export class CoursesListItemComponent implements OnInit, OnChanges {
  @Input() public courseItem: CourseItem;
  @Output() public deleteCourse: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    console.log('Constructor in Course Item');
  }

  ngOnInit() {
    console.log('ngOnInit in Course Item');
  }

  ngOnChanges() {
    console.log('ngOnChange in Course Item');
  }

  deleteCourseById(id) {
    this.deleteCourse.emit(id);
  }
}
