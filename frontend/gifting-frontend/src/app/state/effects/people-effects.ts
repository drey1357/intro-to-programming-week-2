import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom } from "@ngrx/effects";
import { createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, filter, map, switchMap } from "rxjs";
import { PersonDataService } from "src/app/services/people-data.service";
import { selectPeopleLoaded } from "..";
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
            concatLatestFrom(() => this.store.select(selectPeopleLoaded)),
            filter(
                ([,loaded]) => !loaded,
            ),
            switchMap(() => this.service.getPeople()
                .pipe(
                    map(payload => PeopleDocuments.people({payload}))
                )
            )
        )
    });

    constructor(private readonly actions$: Actions, private readonly service: PersonDataService, private store:Store) {}
}