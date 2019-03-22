import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddCourseComponent } from './add-course/add-course.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { CourseAuthorsComponent } from './course-authors/course-authors.component';
import { CourseDateComponent } from './course-date/course-date.component';
import { PipesModule } from '../../pipes/pipes.module';
import { MatAutocompleteModule, MatChipsModule, MatIconModule } from '@angular/material';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
  ]
})
export class DemoMaterialModule {}

@NgModule({
  declarations: [
    AddCourseComponent,
    CourseDateComponent,
    CourseDurationComponent,
    CourseAuthorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    DemoMaterialModule
  ],
  exports: [
    AddCourseComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AddCourseModule { }
