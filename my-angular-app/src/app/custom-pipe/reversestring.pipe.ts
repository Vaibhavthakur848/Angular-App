import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversestring',
  standalone: true
})
export class ReversestringPipe implements PipeTransform {

 transform(value: string): string {
    return value.split('').reverse().join('');
  }

}
