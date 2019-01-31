import { Pipe, PipeTransform } from '@angular/core';
import {CourseItem} from '../courses-list/course.service';

@Pipe({
  name: 'coursesFind'
})
export class CoursesFindPipe implements PipeTransform {

  transform(courses: any[], input: string): CourseItem[] {
    const result = courses.filter(course => course.title.includes(input));
    return result;
  }
}
