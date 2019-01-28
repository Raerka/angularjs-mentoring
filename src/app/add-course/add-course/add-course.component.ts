import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  id: number = null;
  description = '';

  constructor() { }

  ngOnInit() {
  }

  onClickSave() {
    console.log('Save');
  }

  onClickCancel() {
    console.log('Cancel');
  }

}
