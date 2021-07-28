import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

// stream de actions solo el de Actions
import { createEffect, ofType, Actions } from "@ngrx/effects";
import * as LoginActions from './login.actions';

// observables
import { EMPTY, throwError, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

// services
import { UsuariosService } from "src/app/pages/services/usuarios.service";

@Injectable()
export class LoginEffects {
    constructor(
        private actions$: Actions,
        private usuarioService: UsuariosService,
        private router: Router
    ) {}

    usuarioLogin$ = createEffect(() => this.actions$.pipe(
        ofType(LoginActions.login),
        switchMap(({ usuario, password }) =>
                this.usuarioService.login(usuario, password).pipe(
                    map(data => {
                        LoginActions.loginSucces({ usuario: data.usuario, token: data.token });
                        this.router.navigate(['/inicio']);
                    }),
                    catchError((err) => of(LoginActions.loginFailure({error: err}))),
                    catchError((err) => EMPTY),
                    catchError((err) => throwError(err))
                )
            )
    ), { dispatch: false });
}