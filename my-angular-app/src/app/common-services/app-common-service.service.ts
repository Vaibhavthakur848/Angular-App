import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',

})
export class AppCommonServiceService {

  count: WritableSignal<number> = signal(2);//writeable signals

  doubleCount: Signal<number> = computed(() => this.count() * 2); //computed signals


  constructor() {
    this.count.set(7); // to update the value
    this.count.update(value => value + 1); // to update the value from previous
  }
}
