import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import { PeopleDocuments } from '../actions/people-actions';

export interface PersonEntity {
    id: string;
    firstName: string;
    lastName: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PeopleState extends EntityState<PersonEntity> {

}

export const adapter = createEntityAdapter<PersonEntity>();

const initialState = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(PeopleDocuments.people, (currentState, action) => adapter.setAll(action.payload, currentState)),
  on(PeopleDocuments.person, (s,a) => adapter.addOne(a.payload, s))
);

 