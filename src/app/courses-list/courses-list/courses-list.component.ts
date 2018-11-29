import { Component, OnInit } from '@angular/core';
import {CourseItem} from '../courses-item.interface';
import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courseItems: CourseItem[] = [];

  constructor() {
  }

  ngOnInit() {
    this.courseItems = CoursesService.getCoursesItems();
  }

}
