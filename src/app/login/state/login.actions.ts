import { createAction, props } from "@ngrx/store";
import { UserI } from "src/app/interfaces/usuario";

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
