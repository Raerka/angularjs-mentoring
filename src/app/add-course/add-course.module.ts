import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { CourseAuthorsComponent } from './course-authors/course-authors.component';
import { CourseDateComponent } from './course-date/course-date.component';
import { PipesModule } from '../pipes/pipes.module';

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
    PipesModule
  ],
  exports: [
    AddCourseComponent
  ]
})
export class AddCourseModule { }
