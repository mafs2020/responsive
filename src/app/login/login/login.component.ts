import { Component, OnInit } from '@angular/core';

// formulario
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// ngrx
import { Store } from '@ngrx/store';
import * as LoginActions from '../state/login.actions';
import { getError, State } from '../state/login.reduce';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  constructor(
    private store: Store<State>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.store.select( getError ).subscribe(data => console.log(data));
    this.crearFormulario();
  }

  enviar(): void {
    this.store.dispatch(LoginActions.login( this.formulario.value ))
  }

  crearFormulario(): void {
    this.formulario = this.fb.group({
      usuario: ['pepe', { updateOn: 'blur' }, Validators.required ],
      password: ['123456', Validators.required],
      // ff: ['', { updateOn: 'blur' } ]
    });
    // this.formulario.get('password').dirty
  }

}
