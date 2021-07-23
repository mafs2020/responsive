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
    // products: Product[];
    error: string;
}

const initialState: PageState = {
    showProductCode: true,
    currentProductId: null,
    // products: [],
    error: ''
};

const getProductFeatureState = createFeatureSelector<PageState>('pages');

export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
);

export const getCurrentProductId = createSelector(
    getProductFeatureState,
    state => state.currentProductId
);

export const getCurrentProduct = createSelector(
    getProductFeatureState,
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

export const getcurrentdddd = (custe: number) => {
    createSelector(
        getProductFeatureState,
        (customers) => {
            return customers[custe];
        }
    )
};

export const productReducer = createReducer<PageState>(
    initialState,
    on(ProductActions.toggleProductCode, (state): PageState => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        };
    }),
    on(ProductActions.setCurrentProduct, (state, action): PageState => {
        return {
            ...state,
            currentProductId: action.currentProductId
        };
    }),
);