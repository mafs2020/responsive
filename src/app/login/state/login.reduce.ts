import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import * as LoginActions from './login.actions';
import { UserI } from 'src/app/interfaces/usuario';

export interface State extends AppState.State {
    login: LoginState
}

export interface LoginState {
    usuario: UserI | null;
    token: string;
    error: string;
    
}

const initialState: LoginState = {
    token: '',
    usuario: null,
    error: ''
};

const getLoginFeatureState = createFeatureSelector<LoginState>('login');

export const getUser = createSelector(
    getLoginFeatureState,
    state => state.usuario
);

export const getToken = createSelector(
    getLoginFeatureState,
    state => state.token
);

export const getError = createSelector(
    getLoginFeatureState,
    state => state.error
);

export const LoginReducer = createReducer<LoginState>(
    initialState,
    on(LoginActions.loginSucces, (state, action): LoginState => {
        return {
            ...state,
            usuario: action.usuario,
            token: action.token
        }
    }),
    on( LoginActions.loginFailure, (state, action): LoginState => {
        return {
            ...state,
            error: action.error
        }
    })
);
