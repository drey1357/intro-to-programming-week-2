import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPeopleLoaded } from 'src/app/state';
import { PeopleCommands } from 'src/app/state/actions/people-actions';

@Component({
  selector: 'app-gift-giving',
  templateUrl: './gift-giving.component.html',
  styleUrls: ['./gift-giving.component.css']
})
export class GiftGivingComponent {
  loaded$ = this.store.select(selectPeopleLoaded);
  constructor(private readonly store:Store){
    store.dispatch(PeopleCommands.load());
  }
}
