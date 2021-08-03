    // import { Product } from '../product';

/* NgRx */
import { createAction,  props } from '@ngrx/store';
import { UserI } from 'src/app/interfaces/usuario';

export const cargarUsuarios = createAction(
    '[Page Usuario] Todos Los Usuarios'
);

export const todosLosUsuariosSucces = createAction(
    '[Page Usuario] Todos Los Usuarios Succes',
    props<{ usuarios: UserI[] }>()
);

export const todosLosUsuariosFailure = createAction(
    '[Page Usuario] Todos Los Usuarios Error',
    props<{error: string}>()
);

export const login = createAction(
    '[Login] usuario login',
    props<{usuario: string, password: string }>()
);

export const loginSucces = createAction(
    '[Login] usurio Login Succes',
    props<{ token: string, usuario: UserI }>()
);

export const loginFailure = createAction(
    '[Login] usuario Login Failure',
    props<{error: string}>()
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
