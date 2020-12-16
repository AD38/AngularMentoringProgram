import { createSelector } from '@ngrx/store';
import { IAuthState } from './auth.reducer';

interface IAppState {
    auth: IAuthState;
}

const auth = (state: IAppState) => state.auth;
export const selectUserInfo = createSelector(auth, state => state.userInfo);
