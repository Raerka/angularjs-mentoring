import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

import { CourseItem } from '../../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListItemComponent implements OnInit, OnChanges {
  @Input() public courseItem: CourseItem;
  @Output() public deleteCourse: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router) { }

  ngOnInit() { }

  ngOnChanges() { }

  deleteCourseById(id) {
    this.deleteCourse.emit(id);
  }

  editCurrentCourse(id) {
    this.router.navigate(['courses', id]);
  }
}
