import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { PersonListItem, PersonCreate } from '../models/people';

@Injectable()
export class PersonDataService {
    constructor(private client:HttpClient) {}
    getPeople() {
        return this.client.get<{data: PersonListItem[]}>('http://localhost:1337/people')
        .pipe(
            map(response => response.data)
        );
    }

        addPerson(person:PersonCreate) {
            return this.client.post<PersonListItem>('http://localhost:1337/people', person);
        }
    
}