import { Action, createReducer, on } from '@ngrx/store';
import { ICource } from '../../models/icource';
import * as CourcesActions from '../cources.actions';


export const courcesFeatureKey = 'cources';

export interface ICourceState {
  cources: ICource[];
  courceItemsLength: number;
  searchText: string;
}

export const initialState: ICourceState = {
  cources: [],
  courceItemsLength: 0,
  searchText: ''
};


export const reducer = createReducer(
  initialState,
  on(CourcesActions.loadCourcesSuccess, (state, action) => ({
    ...state,
    cources: action.cources,
    courceItemsLength: action.cources.length,
  })),
  on(CourcesActions.deleteCourceSuccess, (state, action) => ({
    ...state,
    cources: state.cources.filter(c => c.id !== action.id),
    courceItemsLength: state.courceItemsLength - 1,
  })),
  on(CourcesActions.loadMoreCourcesSuccess, (state, action) => ({
    ...state,
    cources: action.cources,
    courceItemsLength: action.cources.length,
  })),
  on(CourcesActions.searchCourcesSuccess, (state, action) => ({
    ...state,
    cources: action.cources,
    courceItemsLength: action.cources.length,
    searchText: action.searchText
  })),
  on(CourcesActions.addCourceSuccess, (state, action) => ({
    ...state,
    cources: [...state.cources, action.cource],
    courceItemsLength: state.cources.length + 1,
  })),
  on(CourcesActions.updateCourceSuccess, (state, action) => ({
    ...state,
    cources: state.cources.map(c => c.id === action.cource.id ? action.cource : c),
    courceItemsLength: state.cources.length + 1,
  })),
);

