import { AfterViewInit, ElementRef, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { AsideService } from 'src/app/shared/services/aside.service';
import { Store } from '@ngrx/store';
import { State, getShowProductCode, getTodosUsuarioFailure, getTodosUsuarioSelector } from '../state/pages.reduce';
import * as ProductActions from '../state/pages.actions';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, OnDestroy, AfterViewInit  {

  ss = this.asideService.mostrarAside$;
  subje = new Subject<never>();
  @ViewChild('main') main: ElementRef<HTMLDivElement>;
  constructor(
    private render: Renderer2,
    private asideService: AsideService,
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    // Do NOT subscribe here because it uses an async pipe
    // This gets the initial values until the load is complete.
    // this.products$ = this.store.select(getProducts);

    // // Do NOT subscribe here because it uses an async pipe
    // this.errorMessage$ = this.store.select(getError);

    // this.store.dispatch(ProductActions.loadProducts());
    this.store.dispatch( ProductActions.todosLosUsuarios() );
    this.store.select( getTodosUsuarioSelector ).subscribe(
      {
        next: (dt) => console.log(dt),
        error: (err) => console.error(err),
        complete: () => console.log('se completo')
      }
    );

    this.store.select( getTodosUsuarioFailure ).subscribe(
      {
        next: (dt) => console.log(dt),
        error: (err) => console.error(err),
        complete: () => console.log('se completo')
      }
    );
    // // Do NOT subscribe here because it uses an async pipe
    // this.selectedProduct$ = this.store.select(getCurrentProduct);

    // // Do NOT subscribe here because it uses an async pipe
    // this.displayCode$ = this.store.select(getShowProductCode);
    
  }

  ngAfterViewInit(): void {
    console.log(this.main);
    this.ss.pipe(
      takeUntil(this.subje)
    )
      .subscribe(tt => 
        tt ? this.render.addClass(this.main.nativeElement, 'ml')
        : this.render.removeClass(this.main.nativeElement, 'ml'));
    console.log(this.main.nativeElement.className.includes('ml'));
  }
  ngOnDestroy(): void {
    this.subje.next();
    this.subje.complete();
  }

  // checkChanged(): void {
  //   this.store.dispatch(ProductActions.toggleProductCode());
  // }

}
