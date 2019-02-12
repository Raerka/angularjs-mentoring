import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.css']
})
export class CourseAuthorsComponent implements OnInit {

  authors = '';

  constructor() { }

  ngOnInit() {
  }

}
