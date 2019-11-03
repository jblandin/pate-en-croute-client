import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined } from 'util';

@Pipe({
  name: 'hhmmss'
})
export class HhmmssPipe implements PipeTransform {

  transform(value: number): string {
    return this.hhmmss(value);
  }

  private pad(num: number) {
    return ('0' + num).slice(-2);
  }

  private hhmmss(secs: number) {
    if (isUndefined(secs) || isNaN(secs)) {
      return '';
    }
    let minutes = Math.floor(secs / 60);
    secs = secs % 60;
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(secs)}`;
  }
}
