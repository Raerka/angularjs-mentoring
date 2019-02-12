import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.css']
})
export class CourseDurationComponent implements OnInit {
  courseDuration: number = null;

  constructor() { }

  ngOnInit() {
  }

}
