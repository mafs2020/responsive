import { Component, OnDestroy, OnInit } from '@angular/core';

import { AsideService } from '../services/aside.service';

import { takeUntil, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import { Store } from '@ngrx/store';
import { getToken, State } from 'src/app/pages/state/pages.reduce';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit, OnDestroy {
  cerrarObserver$: Subject<never> = new Subject();
  mostrar: boolean;
  token: boolean;
  asideMostrar$ = this.asideService.mostrarAside$;
  constructor(
    private asideService: AsideService,
    private store: Store<State>
  ) { }
  ngOnInit(): void {
    this.asideMostrar$.pipe(
      tap(b => console.log(b)),
      takeUntil(this.cerrarObserver$)
    ).subscribe(d => this.mostrar = !d);
    // TODO CAMBIAR el login
    // this.store.select( getToken ).subscribe(data => {
    //   this.token = data == null;
    //   console.log('this.mostrar :>> ', this.token);
    //   console.log( this.token );
    // });
  }

  ngOnDestroy(): void {
    this.cerrarObserver$.next();
    this.cerrarObserver$.complete();
  }

}
