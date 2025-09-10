import { Component, effect, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppCommonServiceService } from './common-services/app-common-service.service';
import { count, forkJoin, from, map, merge, mergeMap, Observable, tap, toArray } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './common-state/common-state';
import { selectCount } from './common-state/common-selector';
import * as CounterActions from './common-state/common-action';
import { HighlightDirective } from './custom-directives/highlight.directive';
import { ReversestringPipe } from './custom-pipe/reversestring.pipe';
import { SortArrayPipe } from './custom-pipe/sort-array.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HighlightDirective,ReversestringPipe,SortArrayPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  data: any = 1;
  count$: Observable<number> | undefined;
  myService = inject(AppCommonServiceService);
  constructor(private store: Store<AppState>) {
    effect(() => {
      //console.log(`The current count is: ${this.myService.count()}`); //Signals are useful because they
      //  notify interested consumers when they change. An effect is an operation
      //  that runs whenever one or more signal values change. You can create an effect with 
      // the effect function:
    });
    
  }

    ngOnInit(): void {
      
    this.store.dispatch(CounterActions.loadDataSuccess ({ data: [1, 2, 3] }));
    this.count$ = this.store.select(selectCount);
  //  console.log(this.count$);
    this.count$.subscribe(value => {
    //  console.log('Count from Store:', value);
    });
    this.mergeOperator();
  }

  mapOperator(){
const source = from([1, 2, 3, 4, 5]);
const doubled = source.pipe(map(value => value * 2));
//pipe allows you to use multiple operators and are necessary as because we cant use operators directly on observables.

//doubled.subscribe(result => console.log(result));
// Output: 2, 4, 6, 8, 10

  }


  tapOperator(){
  let source=from([1,2,3]);

  //let result=source.pipe(tap(value=>console.log('Before map:',value)));
  }

  mergeOperator()
  {
    let result=from([1,2,3]);
    let result1=from([4,5,6]);
  merge(result1,result).pipe(toArray()).subscribe(value=>console.log(value)); 

 }
 mergeMapOperator() {
  const source = from([1, 2, 3]);
  source.pipe(
    mergeMap(val => from([val * 10, val * 100])), // For each value, emit two new values
    toArray() // Collect all emitted values into a single array
  ).subscribe(result => console.log(result)); // Output: [10, 100, 20, 200, 30, 300]
}

forkJoinOperator() {
  const obs1 = from([1, 2, 3]);
  const obs2 = from([4, 5, 6]);
  forkJoin([obs1, obs2]).subscribe(result => {
    console.log(result); // Output: [3, 6] emits last value from array
  });
}
}
