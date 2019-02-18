import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration.pipe';
import { ArraySortPipe } from './array-sort.pipe';

@NgModule({
  declarations: [
    DurationPipe,
    ArraySortPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DurationPipe,
    ArraySortPipe
  ]
})
export class PipesModule { }
