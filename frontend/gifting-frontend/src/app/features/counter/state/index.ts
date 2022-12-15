import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { CountData } from "../models";

import * as fromCount from './reducers/count-reducer';
export const featureName = "counter";

export interface CounterState {
    count: fromCount.CountState
}

export const reducers: ActionReducerMap<CounterState> = {
    count: fromCount.reducer
};

//selector functions
// 1. create one for the feature

// from the root state, go to "counter"
const selectFeature = createFeatureSelector<CounterState>(featureName);


//one per branch
const selectCountBranch = createSelector(selectFeature, f => f.count);

export const selectCountCurrent = createSelector(selectCountBranch, b => b.current);
export const selectCountingBy = createSelector(selectCountBranch, b => b.by);

export const selectCountData = createSelector(selectCountBranch, b => b as CountData);
