import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const CounterCommands = createActionGroup({
    source: 'Counter Commands',
    events: {
        incremented: emptyProps(),
        decremented: emptyProps(),
        reset: emptyProps(),
        countby: props<{by: 1 | 3 | 5}>()
    }
})