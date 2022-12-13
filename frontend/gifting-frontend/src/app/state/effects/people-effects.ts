import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { createEffect, ofType } from "@ngrx/effects";
import { concatMap, map, switchMap } from "rxjs";
import { PersonDataService } from "src/app/services/people-data.service";
import { PeopleCommands, PeopleDocuments } from "../actions/people-actions";

@Injectable()
export class PeopleEffects {

    addPerson$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PeopleCommands.add),
            concatMap(({payload}) => this.service.addPerson(payload)
                .pipe(
                    map((payload) => PeopleDocuments.person({payload}))
                )
            )
        )
    })

    loadPeople$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PeopleCommands.load),
            switchMap(() => this.service.getPeople()
                .pipe(
                    map(payload => PeopleDocuments.people({payload}))
                )
            )
        )
    });

    constructor(private readonly actions$: Actions, private readonly service: PersonDataService) {}
}