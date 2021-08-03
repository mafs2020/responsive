import { Component, OnDestroy, OnInit } from '@angular/core';

// formulario
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// rutas
// import { ActivatedRoute, Event, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';

// ngrx
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as PageActions from '../../pages/state/pages.actions';
import { State } from '../../pages/state/pages.reduce';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  formulario: FormGroup;
  login$: Subscription;
  constructor(
    private store: Store<State>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.store.select( getLoginFailure ).subscribe(data => console.log(data));
    this.crearFormulario();
  }

  enviar(): void {
    this.store.dispatch(PageActions.login( this.formulario.value ));
  }

  crearFormulario(): void {
    this.formulario = this.fb.group({
      usuario: ['pepe', Validators.required ],
      // usuario: ['pepe', { updateOn: 'blur' }, Validators.required ],
      password: ['123456', Validators.required],
      //   password: ['123456', { updateOn: 'blur' }, {
      //     validators: Validators.required,
      //     asyncValidators: {}
      //  }],
      // ff: ['', { updateOn: 'blur' } ]
    });
    // this.formulario.get('password').dirty
  }

  ngOnDestroy(): void {
    // this.login$.unsubscribe();
  }

}
