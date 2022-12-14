import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCountCurrent } from '../../state';
import { CounterCommands } from '../../state/actions/count-actions';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {
  current$ = this.store.select(selectCountCurrent);

  constructor(private store:Store){}
  
  increment(){
    this.store.dispatch(CounterCommands.incremented())
  }

  decrement(){
    this.store.dispatch(CounterCommands.decremented())
  }

  reset(){
    this.store.dispatch(CounterCommands.reset())
  }
}
