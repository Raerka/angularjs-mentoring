import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByDate'
})
export class ArraySortPipe implements PipeTransform {

  transform(array: any, date: string): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    return array.sort((a: any, b: any) => new Date(b[date]) - new Date(a[date]));
  }
}
