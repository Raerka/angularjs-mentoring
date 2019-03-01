import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.css']
})
export class CourseDateComponent {
  @Input()
  creationDate = '';

  @Output()
  creationDateChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onCreationDateChange(event) {
    this.creationDateChange.emit(event);
  }
}
