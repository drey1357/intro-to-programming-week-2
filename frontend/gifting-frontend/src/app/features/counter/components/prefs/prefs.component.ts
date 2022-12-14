import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCountingBy } from '../../state';
import { CounterCommands } from '../../state/actions/count-actions';

@Component({
  selector: 'app-prefs',
  templateUrl: './prefs.component.html',
  styleUrls: ['./prefs.component.css']
})
export class PrefsComponent {
  countingBy$ = this.store.select(selectCountingBy);
  constructor(private store:Store){}

    setCountBy(by: 1 | 3 | 5){
      this.store.dispatch(CounterCommands.countby({by}));
    }
  }
