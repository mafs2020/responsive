import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterEvent, Event } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { UserI } from 'src/app/interfaces/usuario';
import { AsideService } from 'src/app/shared/services/aside.service';
import { getTodosUsuarioFailure, getTodosUsuarioSelector, selectElimininarUsuarioSuccesProperty, State } from '../state/pages.reduce';
import * as ProductActions from '../state/pages.actions';
import { delay, filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  ss = this.asideService.mostrarAside$;
  subje = new Subject<never>();
  errorMessage$: Observable<any>;
  usuarios: UserI[];
  @ViewChild('main') main: ElementRef<HTMLDivElement>;
  observableSub: Subscription;
  constructor(
    private render: Renderer2,
    private asideService: AsideService,
    private store: Store<State>,
    private router: Router,
  ) { this.loader(); }

  ngOnInit(): void {
    this.errorMessage$ = this.store.select( getTodosUsuarioFailure );

    // this.store.dispatch( ProductActions.cargarUsuarios() );
    // this.store.select( getTodosUsuarioSelector ).subscribe(data => this.usuarios = data);
    // this.store.select( selectElimininarUsuarioSuccesProperty )
    //       .subscribe(data => this.store.dispatch( ProductActions.cargarUsuarios() ));
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
    // this.observableSub.unsubscribe();
    // console.log(this.observableSub.closed);
  }

}
