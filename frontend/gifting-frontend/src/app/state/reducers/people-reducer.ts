import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import { PeopleCommands, PeopleDocuments } from '../actions/people-actions';

export interface PersonEntity {
    id: string;
    firstName: string;
    lastName: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PeopleState extends EntityState<PersonEntity> {
  loaded: boolean;
}

export const adapter = createEntityAdapter<PersonEntity>();

const initialState = adapter.getInitialState({
  loaded: false
});

export const reducer = createReducer(
  initialState,
  // on(PeopleCommands.load, (s) => ({...s, loaded: false})),
  on(PeopleDocuments.people, (s) => ({ ...s, loaded: true})),
  on(PeopleDocuments.people, (currentState, action) => adapter.setAll(action.payload, currentState)),
  on(PeopleDocuments.person, (s,a) => adapter.addOne(a.payload, s))
);

 