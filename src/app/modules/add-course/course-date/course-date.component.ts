import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseDateComponent),
      multi: true }
  ]
})

export class CourseDateComponent implements ControlValueAccessor {

  @Input()
  control;

  creationDate = '';

  constructor() { }

  propagateChange = (_: any) => {};
  propagateTouch = (_: any) => {};

  writeValue(date) {
    if (date) {
      this.creationDate = date;
      this.propagateChange(this.creationDate);
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {
    this.propagateTouch = fn;
  }

  onDateChange(event) {
    this.propagateChange(this.creationDate);
  }

  onTouched() {
    this.propagateTouch(null);
  }
}
