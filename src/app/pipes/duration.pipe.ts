import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(duration: number): any {
    const hours = Math.trunc(duration / 60);
    const min = ('0' + duration % 60).slice(-2);
    return hours
      ? `${hours} h ${min} min`
      : `${min} min`;
  }

}
