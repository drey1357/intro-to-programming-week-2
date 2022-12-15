import { createReducer, on } from "@ngrx/store";
import { CounterCommands, CounterDocuments } from "../actions/count-actions";


export interface CountState{
    current: number;
    by: 1 | 3 | 5
}

export const initialState:CountState = {
    current: 0,
    by: 1
}

export const reducer = createReducer(initialState,
    on(CounterDocuments.counter, (s,a) => a.payload),
    on(CounterCommands.countby, (s,a) => ({...s, by: a.by})),
    on(CounterCommands.reset, (s) => ({...s, current: 0})),
    on(CounterCommands.incremented, (currentState) => ({...currentState, current: currentState.current + currentState.by})),
    on(CounterCommands.decremented, (s) => ({...s, current: s.current - s.by}))
);