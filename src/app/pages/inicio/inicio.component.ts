import { Component, OnInit, AfterViewInit, ElementRef, OnDestroy, Renderer2, ViewChild } from '@angular/core';

import { Observable, Subject, Subscription } from 'rxjs';
import { delay, filter, takeUntil, tap } from 'rxjs/operators';

import { AsideService } from 'src/app/shared/services/aside.service';

import { Router, Event, RouterEvent, NavigationEnd, NavigationStart } from '@angular/router';

import { Store } from '@ngrx/store';
import { State, getTodosUsuarioFailure, getTodosUsuarioSelector } from '../state/pages.reduce';
import * as ProductActions from '../state/pages.actions';
import { getToken } from 'src/app/login/state/login.reduce';
import { UserI } from 'src/app/interfaces/usuario';

// import {AtomSpinner} from 'epic-spinners';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, OnDestroy, AfterViewInit  {

  ss = this.asideService.mostrarAside$;
  subje = new Subject<never>();
  errorMessage$: Observable<any>;
  usuarios$: Observable<UserI[]>;
  @ViewChild('main') main: ElementRef<HTMLDivElement>;
  observableSub: Subscription;
  constructor(
    private render: Renderer2,
    private asideService: AsideService,
    private store: Store<State>,
    private router: Router,
  ) { this.loader(); }

  ngOnInit(): void {
    // // Do NOT subscribe here because it uses an async pipe
    this.errorMessage$ = this.store.select( getTodosUsuarioFailure );

    this.store.dispatch( ProductActions.cargarUsuarios() );
    this.usuarios$ = this.store.select( getTodosUsuarioSelector );

    // this.observableSub = this.store.select( getTodosUsuarioSelector ).subscribe(
    //   (dt) => console.log(dt),
    //   (err) => console.error(err),
    //   () => console.log('se completo')
    //   // {
    //     // next: (dt) => console.log(dt),
    //     // error: (err) => console.error(err),
    //     // complete: () => console.log('se completo')
    //   // }
    // );

    // const g = this.store.select( getTodosUsuarioFailure ).subscribe(
    //   {
    //     next: (dt) => console.log(dt),
    //     error: (err) => console.error(err),
    //     complete: () => console.log('se completo')
    //   }
    // );
    // this.observableSub.add(g);
  }

  ngAfterViewInit(): void {
    this.ss.pipe(takeUntil(this.subje))
      .subscribe(tt => 
        tt ? this.render.addClass(this.main.nativeElement, 'ml')
        : this.render.removeClass(this.main.nativeElement, 'ml'));
    // console.log(this.main.nativeElement.className.includes('ml'));
  }

  loader(): void {
    this.router.events
      // .pipe(filter( (e:Event) => e instanceof NavigationEnd  ))
      .pipe(
        takeUntil(this.subje),
        // filter( (e: Event ): e is RouterEvent => e instanceof NavigationStart ),
        filter( (e: Event ): e is RouterEvent => e instanceof NavigationEnd ),
        delay(500)
      ).subscribe(dt => console.log(dt));
  }

  ngOnDestroy(): void {
    this.subje.next();
    this.subje.complete();
    this.observableSub.unsubscribe();
    console.log(this.observableSub.closed);
  }

}
