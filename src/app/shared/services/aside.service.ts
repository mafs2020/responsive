import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsideService {
  public mostrarAside: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public mostrarAside$ = this.mostrarAside.asObservable();

  constructor() { }
}
