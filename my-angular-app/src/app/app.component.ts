import { Component, effect, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppCommonServiceService } from './common-services/app-common-service.service';
import { count, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './common-state/common-state';
import { selectCount } from './common-state/common-selector';
import * as CounterActions from './common-state/common-action';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  data: any = 1;
  count$: Observable<number> | undefined;
  myService = inject(AppCommonServiceService);
  constructor(private store: Store<AppState>) {
    effect(() => {
      console.log(`The current count is: ${this.myService.count()}`); //Signals are useful because they
      //  notify interested consumers when they change. An effect is an operation
      //  that runs whenever one or more signal values change. You can create an effect with 
      // the effect function:
    });
    
  }

    ngOnInit(): void {
      
    this.store.dispatch(CounterActions.loadDataSuccess ({ data: [1, 2, 3] }));
    this.count$ = this.store.select(selectCount);
    console.log(this.count$);
    this.count$.subscribe(value => {
      console.log('Count from Store:', value);
    });
  }
}
