import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseDurationComponent),
      multi: true }
  ]

})
export class CourseDurationComponent implements ControlValueAccessor {

  @Input()
  control;

  length = 0;

  constructor() { }

  propagateChange = (_: any) => {};
  propagateTouch = (_: any) => {};

  writeValue(length) {
    if (length) {
      this.length = length;
      this.propagateChange(this.length);
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
    this.propagateTouch = fn;
  }

  onLengthChange(event) {
    this.propagateChange(this.length);
  }

  onTouched() {
    this.propagateTouch(null);
  }
}
