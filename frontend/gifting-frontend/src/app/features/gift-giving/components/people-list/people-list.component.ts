import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonListItem } from 'src/app/models/people';
import { PersonDataService } from 'src/app/services/people-data.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {

  people$: Observable<PersonListItem[]>;
  constructor(private service:PersonDataService){
    // this is bad, more on this tomorrow
    this.people$ = service.getPeople();
    //service.getPeople().subscribe();
  }
}
