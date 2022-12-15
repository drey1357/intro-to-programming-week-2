import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { CountState } from "../reducers/count-reducer";

export const CounterCommands = createActionGroup({
    source: 'Counter Commands',
    events: {
        incremented: emptyProps(),
        decremented: emptyProps(),
        reset: emptyProps(),
        countby: props<{by: 1 | 3 | 5}>(),
        load: emptyProps()
    }
})

export const CounterDocuments = createActionGroup({
    source: 'Counter Documents',
    events: {
        counter: props<{payload: CountState}>()
    }
})