import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.css']
})
export class CourseDurationComponent {
  @Input()
  length = 0;

  @Output()
  lengthChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  onLengthChange(event) {
    this.lengthChange.emit(event);
  }
}
