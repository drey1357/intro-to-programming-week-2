import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, filter, map, of, tap } from "rxjs";
import { selectCountCurrent, selectCountData } from "..";
import { CountData } from "../../models";
import { CounterCommands, CounterDocuments } from "../actions/count-actions";
import { CountState, initialState } from "../reducers/count-reducer";
import {z} from 'zod';
import { ApplicationEvents } from "../actions/app-actions";


@Injectable()
export class CounterDataEffects{

    private readonly COUNT_DATA_KEY = 'count-data';
    private readonly CountDataSchema = z.object({
        current: z.number(),
        by: z.union([z.literal(1), z.literal(3), z.literal(5)])
    });

    // CounterCommandsLoad => ?? => CounterDocuments.counter
    loadCountData$ = createEffect(
        () => {
        return this.actions$.pipe(
            ofType(CounterCommands.load),  // we only care about this action
            map(() => localStorage.getItem(this.COUNT_DATA_KEY)),  // check local storage, this is going to be null or a string
            filter(storedStuff => !!storedStuff),  // !! means not equal to null -- probably better with storedStuff => storedStuff !== null
            map(storedString => JSON.parse(storedString || "{}")),  // {} is just making the compiler happy
            map(obj => this.CountDataSchema.parse(obj) as CountState),
            map((payload) => CounterDocuments.counter({payload})),
            catchError(err => of(ApplicationEvents.error({source: 'Counter', message: 'We have ourselves a hacker here', payload: err})))
        );
    }, {dispatch: true});

    saveCountData$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CounterCommands.countby, CounterCommands.decremented, CounterCommands.incremented, CounterCommands.reset), // stop here if it isn't one of these
            concatLatestFrom(() => this.store.select(selectCountData)),  // => subscribe to observable of our data returned from selectCountData
            map(([, data]) => JSON.stringify(data) ),  // turn that data into a string so I can write it to local storage
            tap(data => localStorage.setItem(this.COUNT_DATA_KEY, data)) // write that sucker to local storage
        )
    }, {dispatch: false}) // whatever emerges here has to be action, and it is sent to the store.

    constructor(private actions$: Actions, private store:Store){}
}
