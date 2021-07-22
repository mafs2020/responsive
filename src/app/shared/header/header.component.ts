import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AsideService } from '../services/aside.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  ff: HTMLInputElement;
  hh: NodeListOf<Element>;
  agregar = true;
  constructor(private asideService: AsideService) { }

  ngOnInit(): void {
    const d = document.querySelector('#nav-toggle') as HTMLInputElement;
    d.checked = false;
    this.ff= document.querySelector('.sidebar') as HTMLInputElement;
    console.log( this.ff );
  }
  f() {
    console.log('object');
    this.ff.classList.toggle('gg');
    this.asideService.mostrarAside.next(this.agregar);
    this.agregar = !this.agregar;
    this.hh.forEach(e => e.classList.toggle('kit'))
  }
  ngAfterViewInit() {
    this.hh = document.querySelectorAll('a span:not( :first-child )');
    console.log('hhh', this.hh );
  }
}