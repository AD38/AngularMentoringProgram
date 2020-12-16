import { createAction, props } from '@ngrx/store';
import { ICource } from '../models/icource';

export const loadCources = createAction(
  '[Cources] Load Cources'
);
export const loadCourcesSuccess = createAction(
  '[Cources] Load Cources Success',
  props<{ cources: ICource[] }>()
);
export const loadCourcesFailure = createAction(
  '[Cources] Load Cources Failure',
  props<{ error: any }>()
);

export const deleteCource = createAction(
  '[Cources] Delete Cource',
  props<{ id: number }>()
);
export const deleteCourceSuccess = createAction(
  '[Cources] Delete Cource Success',
  props<{ id: number }>()
);

export const loadMoreCources = createAction(
  '[Cources] Load More Cources'
);
export const loadMoreCourcesSuccess = createAction(
  '[Cources] Load More Cources Success',
  props<{ cources: ICource[] }>()
);

export const searchCources = createAction(
  '[Cources] Search Cources',
  props<{ searchText: string }>()
);
export const searchCourcesSuccess = createAction(
  '[Cources] Search Cources Success',
  props<{ cources: ICource[], searchText: string }>()
);

export const addCource = createAction(
  '[Cources] Add Cource',
  props<{ cource: ICource }>()
);
export const addCourceSuccess = createAction(
  '[Cources] Add Cource Success',
  props<{ cource: ICource }>()
);

export const updateCource = createAction(
  '[Cources] Update Cource',
  props<{ cource: ICource }>()
);
export const updateCourceSuccess = createAction(
  '[Cources] Update Cource Success',
  props<{ cource: ICource }>()
);
