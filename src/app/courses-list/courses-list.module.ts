import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { HighlightCourseDirective } from '../directives/highlight-course.directive';
import { MatIconModule } from '@angular/material';
import { PipesModule } from '../pipes/pipes.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesListItemComponent,
    HighlightCourseDirective
  ],
  imports: [
    MatIconModule,
    CommonModule,
    PipesModule,
    CoreModule
  ],
  exports: [
    CoursesListComponent
  ]
})
export class CoursesListModule { }
