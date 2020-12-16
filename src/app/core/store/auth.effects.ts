import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import * as AuthActions from './auth.actions';


@Injectable()
export class AuthEffects {
  userInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadUserInfo),
      mergeMap((action) =>
        this.authService.getUserInfo().pipe(
          map((userInfo) => AuthActions.loadUserInfoSuccess({ userInfo })),
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}

}
