import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterCommands } from './state/actions/count-actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  constructor(store:Store){
    store.dispatch(CounterCommands.load())
  }

}
