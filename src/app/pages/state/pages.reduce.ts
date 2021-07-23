// esto es para el modulo lazyloda

import * as AppState from '../../state/app.state';
import * as ProductActions from './pages.actions';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';


export interface State extends AppState.State {
    pages: PageState
}

// State for this feature (Product)
export interface PageState {
    showProductCode: boolean;
    currentProductId: number | null;
    usuarios: any[];
    // products: Product[];
    error: string;
}

const initialState: PageState = {
    showProductCode: true,
    currentProductId: null,
    // products: [],
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

export const getShowProductCode = createSelector(
    getPagesFeatureState,
    state => state.showProductCode
);

export const getCurrentProductId = createSelector(
    getPagesFeatureState,
    state => state.currentProductId
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
    // TODO cambiar por los usuarios
    on(ProductActions.todosLosUsuarios, (state): PageState => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        };
    }),
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
    })
);