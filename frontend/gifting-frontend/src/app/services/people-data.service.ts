import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { PersonListItem } from '../models/people';

@Injectable()
export class PersonDataService {
    constructor(private client:HttpClient) {}
    getPeople() {
        return this.client.get<{data: PersonListItem[]}>('http://localhost:1337/people')
        .pipe(
            map(response => response.data)
        );
    }
}