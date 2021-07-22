import { Component, OnDestroy, OnInit } from '@angular/core';
import { AsideService } from '../services/aside.service';
import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit, OnDestroy {
  cerrarObserver$: Subject<never> = new Subject();
  mostrar: boolean;
  constructor(private asideService: AsideService) { }
  asideMostrar$ = this.asideService.mostrarAside$;
  ngOnInit(): void {
    this.asideMostrar$.pipe(
      tap(b => console.log(b)),
      takeUntil(this.cerrarObserver$)
    ).subscribe(d => this.mostrar = !d);
  }

  ngOnDestroy(): void {
    this.cerrarObserver$.next();
    this.cerrarObserver$.complete();
  }

}
