import { createSelector } from '@ngrx/store';

import { ICourceState } from './reducers/cources.reducer';

export interface IAppState {
    cources: ICourceState;
}

const cources = (state: IAppState) => state.cources;
export const selectCources = createSelector(cources, state => state.cources);
export const selectCourceItemsLength = createSelector(cources, state => state.courceItemsLength);
export const selectSearchText = createSelector(cources, state => state.searchText);
