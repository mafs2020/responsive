import { AfterViewInit, ElementRef, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { AsideService } from 'src/app/shared/services/aside.service';

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
    private asideService: AsideService
  ) { }

  ngOnInit(): void {
    
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

}
