import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../../../services/course.service';

@Component({
  selector: 'app-course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.css']
})
export class CourseAuthorsComponent {
  @Input()
  authors = '';

  @Output()
  authorsChange: EventEmitter<Author[]> = new EventEmitter<Author[]>();

  constructor() { }

  onAuthorsChange(event) {
    this.authorsChange.emit(event);
  }
}
