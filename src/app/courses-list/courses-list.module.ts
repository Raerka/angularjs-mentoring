import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { HighlightCourseDirective } from '../directives/highlight-course.directive';
import {MatIconModule} from '@angular/material';
import {DurationPipe} from '../pipes/duration.pipe';
import {ArraySortPipe} from '../pipes/array-sort.pipe';

@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesListItemComponent,
    HighlightCourseDirective,
    DurationPipe,
    ArraySortPipe
  ],
  imports: [
    MatIconModule,
    CommonModule,
  ],
  exports: [
    CoursesListComponent
  ]
})
export class CoursesListModule { }
