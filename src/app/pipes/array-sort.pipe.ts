import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../services/course.service';

@Pipe({
  name: 'orderByDate'
})
export class ArraySortPipe implements PipeTransform {

  transform(array: CourseItem[], date: string): CourseItem[] {
    if (!Array.isArray(array)) {
      return;
    }
    return array.sort((a: any, b: any) => +new Date(b[date]) - +new Date(a[date]));
  }
}
