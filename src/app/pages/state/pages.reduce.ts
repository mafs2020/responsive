// esto es para el modulo lazyloda

import * as AppState from '../../state/app.state';
import * as ProductActions from './pages.actions';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { UserI } from 'src/app/interfaces/usuario';


export interface State extends AppState.State {
    pages: PageState
}

// State for this feature (Product)
export interface PageState {
    usuario: UserI | null;
    token: string;
    currentProductId: number | null;
    usuarios: UserI[];
    error: string;
}

const initialState: PageState = {
    currentProductId: null,
    token: '',
    usuario: null,
    usuarios: [],
    error: ''
};

const getPagesFeatureState = createFeatureSelector<PageState>('pages');

export const getTodosUsuarioSelector = createSelector(
    getPagesFeatureState,
    state => state.usuarios
);

export const getTodosUsuarioFailure = createSelector(
    getPagesFeatureState,
    state => state.error
);

export const getCurrentProductId = createSelector(
    getPagesFeatureState,
    state => state.currentProductId
);

export const getToken = createSelector(
    getPagesFeatureState,
    state => state.token
);

export const getUsurio = createSelector(
    getPagesFeatureState,
    state => state.usuario
);

export const getCurrentProduct = createSelector(
    getPagesFeatureState,
    // getCurrentProductId,
    (state, currentProductId) => {
    if (currentProductId === 0) {
    return {
        id: 0,
        productName: '',
        productCode: 'New',
        description: '',
        starRating: 0
    };
    } else {
        return currentProductId ? state.products.find(p => p.id === currentProductId) : null;
    }
    }
);

// formaa actuaal
export const getcurrentdddd = (custe: number) => {
    createSelector(
        getPagesFeatureState,
        (customers) => {
            return customers[custe];
        }
    )
};

export const productReducer = createReducer<PageState>(
    initialState,
    on(ProductActions.todosLosUsuariosSucces, (state, action): PageState => {
        return {
            ...state,
            usuarios: action.usuarios
        };
    }),

    on(ProductActions.todosLosUsuariosFailure, (state, action): PageState => {
        return {
            ...state,
            error: action.error
        }
    }),
);