import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, OnInitEffects } from "@ngrx/effects";
import { EMPTY, of, throwError } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { UsuariosService } from "../services/usuarios.service";
import * as PagesActions from './pages.actions';

@Injectable({
    providedIn: 'root'
})
export class PagesEffects {
// export class PagesEffects implements OnInitEffects {
    constructor(
        private actions$: Actions,
        private usuarioService: UsuariosService
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