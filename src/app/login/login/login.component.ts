import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as LoginActions from '../state/login.actions';
import { getError } from '../state/login.reduce';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select( getError ).subscribe(data => console.log(data));
  }

  enviar(): void {
    this.store.dispatch(LoginActions.login({usuario: 'pepe', password: '123456' }))
  }

}
