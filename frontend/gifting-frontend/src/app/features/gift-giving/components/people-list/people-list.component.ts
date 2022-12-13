import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPeopleList } from 'src/app/state';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  people$ = this.store.select(selectPeopleList)
  constructor(private readonly store:Store) { }
}