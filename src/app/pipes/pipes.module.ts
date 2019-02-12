import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DurationPipe} from './duration.pipe';
import {CoursesFindPipe} from './courses-find.pipe';
import {ArraySortPipe} from './array-sort.pipe';

@NgModule({
  declarations: [
    DurationPipe,
    CoursesFindPipe,
    ArraySortPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DurationPipe,
    CoursesFindPipe,
    ArraySortPipe
  ]
})
export class PipesModule { }
