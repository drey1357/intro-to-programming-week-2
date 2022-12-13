import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { PersonListItem } from "../models/people";
import * as fromPeople from './reducers/people-reducer';

export interface AppState {
    people: fromPeople.PeopleState
}

export const reducers:ActionReducerMap<AppState> = {
    people: fromPeople.reducer
};

// Selector Functions Go Here

const selectPeopleFeature = createFeatureSelector<fromPeople.PeopleState>('people');

const { selectAll: selectAllPeople } = fromPeople.adapter.getSelectors(selectPeopleFeature);

export const selectPeopleList = createSelector(
    selectAllPeople,
    (p) => p as PersonListItem[]
)

export const selectNumberOfPeople = createSelector(
    selectAllPeople,
    p => p.length
)