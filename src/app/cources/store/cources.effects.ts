import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { mergeMap, map, withLatestFrom, debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { CourceService } from '../services/cource.service';
import * as CourceActions from './cources.actions';
import { selectCourceItemsLength, selectSearchText } from './cources.selectors';

@Injectable()
export class CourcesEffects {
  loadCources$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourceActions.loadCources),
      mergeMap(() =>
        this.courceService.get().pipe(
          map(cources => CourceActions.loadCourcesSuccess({ cources }))
        )
      )
    )
  );

  deleteCource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourceActions.deleteCource),
      mergeMap((action) =>
        this.courceService.delete(action.id).pipe(
          map(cources => CourceActions.deleteCourceSuccess({ id: action.id }))
        )
      )
    )
  );

  loadMoreCources$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourceActions.loadMoreCources),
      withLatestFrom(this.store.pipe(select(selectCourceItemsLength)), this.store.pipe(select(selectSearchText))),
      mergeMap(([action, length, searchText]) =>
        this.courceService.get(length + 3, searchText).pipe(
          map(cources => CourceActions.loadMoreCourcesSuccess({ cources }))
        )
      )
    )
  );

  searchCources$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourceActions.searchCources),
      debounceTime(500),
      distinctUntilChanged(),
      filter(action => action.searchText.length === 0 || action.searchText.length > 3),
      mergeMap((action) =>
        this.courceService.get(3, action.searchText).pipe(
          map(cources => CourceActions.searchCourcesSuccess({ cources, searchText: action.searchText }))
        )
      )
    )
  );

  addCource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourceActions.addCource),
      mergeMap((action) =>
        this.courceService.add(action.cource).pipe(
          map(cource => CourceActions.addCourceSuccess({ cource })),
          tap(() => this.router.navigate(['../']))
        )
      )
    )
  );

  updateCource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourceActions.updateCource),
      mergeMap((action) =>
        this.courceService.update(action.cource).pipe(
          map(cource => CourceActions.updateCourceSuccess({ cource })),
          tap(() => this.router.navigate(['../']))
        )
      )
    )
  );


  constructor(private actions$: Actions,
              private courceService: CourceService,
              private store: Store,
              private router: Router) { }
}
