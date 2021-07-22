    // import { Product } from '../product';

/* NgRx */
import { createAction,  props } from '@ngrx/store';

export const toggleProductCode = createAction(
    '[Product] Toggle Product Code'
);

export const setCurrentProduct = createAction(
    '[Product] Set Current Product',
    props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction(
    '[Product] Clear Current Product'
);

export const initializeCurrentProduct = createAction(
    '[Product] Initialize Current Product'
);

export const loadProducts = createAction(
    '[Product] Load'
);

export const loadProductsSuccess = createAction(
    '[Product] Load Success',
        props<{ products: any[] }>()
);

export const loadProductsFailure = createAction(
    '[Product] Load Fail',
    props<{ error: string }>()
);

export const updateProduct = createAction(
    '[Product] Update Product',
        props<{ product: any }>()
);

export const updateProductSuccess = createAction(
    '[Product] Update Product Success',
        props<{ product: any }>()
);

export const updateProductFailure = createAction(
    '[Product] Update Product Fail',
    props<{ error: string }>()
);

export const createProduct = createAction(
    '[Product] Create Product',
        props<{ product: any }>()
);

export const createProductSuccess = createAction(
    '[Product] Create Product Success',
        props<{ product: any }>()
);

export const createProductFailure = createAction(
    '[Product] Create Product Fail',
    props<{ error: string }>()
);

export const deleteProduct = createAction(
    '[Product] Delete Product',
    props<{ productId: number }>()
);

export const deleteProductSuccess = createAction(
    '[Product] Delete Product Success',
    props<{ productId: number }>()
);

export const deleteProductFailure = createAction(
    '[Product] Delete Product Fail',
    props<{ error: string }>()
);
