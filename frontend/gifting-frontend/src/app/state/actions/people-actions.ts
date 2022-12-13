import { createActionGroup, emptyProps, props } from '@ngrx/store'
import { PersonCreate } from 'src/app/models/people'
import { PersonEntity } from '../reducers/people-reducer'

export const PeopleCommands = createActionGroup({
    source: 'People Commands',
    events: {
        load: emptyProps(),
        add: props<{payload: PersonCreate}>()
    }
})

export const PeopleDocuments = createActionGroup({
    source: 'People Documents',
    events: {
        people: props<{payload: PersonEntity[]}>(),
        person: props<{payload: PersonEntity}>()
    }
})