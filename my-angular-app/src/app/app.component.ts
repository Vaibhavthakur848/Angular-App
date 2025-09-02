import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppCommonServiceService } from './common-services/app-common-service.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data: any = 1;
  myService = inject(AppCommonServiceService);
  constructor() {
    effect(() => {
      console.log(`The current count is: ${this.myService.count()}`); //Signals are useful because they
      //  notify interested consumers when they change. An effect is an operation
      //  that runs whenever one or more signal values change. You can create an effect with 
      // the effect function:
    });
  }
}
