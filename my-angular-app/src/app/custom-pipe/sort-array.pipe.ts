import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArray',
  standalone: true
})
export class SortArrayPipe implements PipeTransform {

  transform(value: any[]): unknown {
    return value.sort((a:any,b:any)=>a-b);
  }

}
