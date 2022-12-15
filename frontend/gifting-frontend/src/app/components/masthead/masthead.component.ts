import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectNumberOfPeople, selectPeopleLoaded } from 'src/app/state';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.css']
})
export class MastheadComponent {
    peopleLoaded$ = this.store.select(selectPeopleLoaded);
    people$ = this.store.select(selectNumberOfPeople)
    constructor(private store:Store){}
}
