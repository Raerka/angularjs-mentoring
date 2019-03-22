import { Component, forwardRef, Input, ElementRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Author } from '../../../services/course.service';

@Component({
  selector: 'app-course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseAuthorsComponent),
      multi: true }
  ]
})
export class CourseAuthorsComponent implements ControlValueAccessor {

  @Input()
  allAuthors: Author[] = [];

  @Input()
  control;

  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  authorControl = new FormControl();
  filteredAuthors: Observable<Author[]>;
  authors = [];

  @ViewChild('authorInput') authorInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredAuthors = this.authorControl.valueChanges.pipe(
      startWith(null),
      map((author) => author ? this.filter(author) : this.allAuthors.slice())
    );
  }

  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      if ((value || '').trim()) {
        this.authors.push(value.trim());
      }

      if (input) {
        input.value = '';
      }

      this.authorControl.setValue(null);
    }
  }

  remove(author: Author): void {
    const index = this.authors.indexOf(author);

    if (index >= 0) {
      this.authors.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.authors.push(event.option.viewValue);
    this.authorInput.nativeElement.value = '';
    this.authorControl.setValue(null);
  }

  private filter(value: any): Author[] {
    const searchValue = value && value.name ? value.name.toLowerCase() : value.toLowerCase();
    return this.allAuthors.filter(author => author.name.toLowerCase().indexOf(searchValue) === 0);
  }

  propagateChange = (_: any) => {};
  propagateTouch = (_: any) => {};

  writeValue(authors) {
    if (authors) {
      this.authors = authors;
      this.propagateChange(this.authors);
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
    this.propagateTouch = fn;
  }

  onAuthorsChange(event) {
    this.propagateChange(this.authors);
  }

  onTouched() {
    this.propagateTouch(null);
  }

  isEmpty() {
    return !this.authors.length;
  }
}
