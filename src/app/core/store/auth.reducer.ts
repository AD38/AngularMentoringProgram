import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from '../models/iuser';
import { User } from '../models/user';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface IAuthState {
  userInfo: IUser;
}

export const initialState: IAuthState = {
  userInfo: new User()
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.loadUserInfoSuccess, (state, action) => ({
    ...state,
    userInfo: action.userInfo
  })),
);

