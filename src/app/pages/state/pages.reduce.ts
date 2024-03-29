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
    token: string|null;
    currentProductId: number | null;
    usuarios: UserI[];
    error: string;
    msj: string;
}

const initialState: PageState = {
    currentProductId: null,
    token: null,
    usuario: null,
    usuarios: [],
    msj: '',
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

export const selectElimininarUsuarioSuccesProperty = createSelector(
    getPagesFeatureState,
    state => state.currentProductId
);

export const selectElimininarUsuarioFailureProperty = createSelector(
    getPagesFeatureState,
    state => state.error
);

export const selectcrearAlumnoSuccess = createSelector(
    getPagesFeatureState,
    state => state.msj
);

export const selectCrearAlumnoFailure = createSelector(
    getPagesFeatureState,
    state => state.error
);

// export const getLoginFailure = createSelector(
//     getPagesFeatureState,
//     state => state.error
// );

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

export const pageReducer = createReducer<PageState>(
    initialState,
    on(ProductActions.todosLosUsuariosSucces, (state, { usuarios }): PageState => {
        return {
            ...state,
            usuarios
        };
    }),

    on(ProductActions.todosLosUsuariosFailure, (state, action): PageState => {
        return {
            ...state,
            error: action.error
        }
    }),

    on(ProductActions.loginSucces, (state, { usuario, token }): PageState => {
        return {
            ...state,
            token,
            usuario
        }
    }),

    on(ProductActions.eliminarUsuarioSuccess, (state, { key }): PageState => {
        console.log('ProductActions.eliminarUsuarioSuccess');
        return {
            ...state,
            currentProductId: key
        }
    }),

    on(ProductActions.eliminarUsuarioFailure, (state, { error }): PageState => {
        console.log('ProductActions.eliminarUsuarioFailure');
        return {
            ...state,
            error
        }
    }),
    on(ProductActions.loginFailure, (state, { error }): PageState => {
        return {
            ...state,
            error
        }
    }),
    // TODO HACER
    on(ProductActions.crearAlumnoSuccess, (state, { msj }): PageState => {
        console.log('state :>> ', state);
        return {
            ...state,
            msj
        }
    }),
    on(ProductActions.crearAlumnoFailure, (state, { error }): PageState => {
        return {
            ...state,
            error
        }
    }),
);