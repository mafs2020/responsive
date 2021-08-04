import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

// ngrx
import { Actions, createEffect, ofType, OnInitEffects } from "@ngrx/effects";
import * as PagesActions from './pages.actions';

// observables
import { EMPTY, of, throwError } from "rxjs";
import { catchError, map, mergeMap, shareReplay, switchMap, tap } from "rxjs/operators";

// servicio
import { UsuariosService } from "../services/usuarios.service";

@Injectable({
    providedIn: 'root'
})
export class PagesEffects {
// export class PagesEffects implements OnInitEffects {
    constructor(
        private actions$: Actions,
        private usuarioService: UsuariosService,
        private router: Router
    ) {}
    // ngrxOnInitEffects(): PagesActions {
    //     console.log('pltSSSSSSSSSSSSSSSSSSS');
    // }
    usuarioTodos$ = createEffect(() => this.actions$.pipe(
            ofType(PagesActions.cargarUsuarios),
            switchMap(() =>
                this.usuarioService.usuariosAll$.pipe(
                    map(data => PagesActions.todosLosUsuariosSucces({ usuarios: data})),
                    catchError((err) => of(PagesActions.todosLosUsuariosFailure({error: err}))),
                    catchError((err) => EMPTY),
                    catchError((err) => throwError(err))
                )
            )
        )
        // ), { dispatch: false }
    );

    eliminarUsuario$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PagesActions.eliminarUsuario),
            mergeMap(({ id }) =>
                this.usuarioService.eliminar(id).pipe(
                    shareReplay(),
                    tap(data => console.log(data)),
                    map(data => PagesActions.eliminarUsuarioSuccess({ key: data })),
                    tap(data => of([])),
                    catchError(error => of(PagesActions.eliminarUsuarioFailure({ error }))))
            ),
        );
    });

    usuarioLogin$ = createEffect(() => this.actions$.pipe(
        ofType(PagesActions.login),
        switchMap(({ usuario, password }) =>
                this.usuarioService.login(usuario, password).pipe(
                    map(({ token, usuario }) => {
                        PagesActions.loginSucces({ usuario: usuario, token: token });
                        this.router.navigate(['/inicio']);
                    }),
                    catchError((err) => of(PagesActions.loginFailure({error: err}))),
                    catchError((err) => EMPTY),
                    catchError((err) => throwError(err)),
                    catchError((err) => {
                        console.log(err);
                        return throwError(err)
                    })
                )
            )
    ), { dispatch: false });
}


// updateTitle$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(routerNavigatedAction),
// TODO tengo entendido ue es lazy
//       concatLatestFrom(() => this.store.select(fromRoot.selectRouteData)),
//       map(([, data]) => `Book Collection - ${data['title']}`),
//       tap((title) => this.titleService.setTitle(title))
//     ),
//     {
//       dispatch: false,
//     }
//   );