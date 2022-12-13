import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectNumberOfPeople } from 'src/app/state';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.css']
})
export class MastheadComponent {
    people$ = this.store.select(selectNumberOfPeople)
    constructor(private store:Store){}
}
