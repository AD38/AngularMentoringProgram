import { createAction, props } from '@ngrx/store';
import { IUser } from '../models/iuser';

export const loadUserInfo = createAction(
  '[Auth] Load User Info',
);
export const loadUserInfoSuccess = createAction(
  '[Auth] Load User Info Success',
  props<{ userInfo: IUser }>()
);
