import { Component, OnInit, Input } from '@angular/core';
import {CourseItem} from '../courses-item.interface';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css']
})
export class CoursesListItemComponent implements OnInit {
  @Input() public courseItem: CourseItem;

  constructor() { }

  ngOnInit() {
  }

}
