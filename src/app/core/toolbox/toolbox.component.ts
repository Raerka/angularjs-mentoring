import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  public course = '';

  constructor() { }

  ngOnInit() {
  }

  findCourse() {
    console.log(`Please find this ${this.course}`);
    this.clearInput();
  }

  clearInput() {
    this.course = '';
  }
}
