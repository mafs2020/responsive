import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { selectCrearAlumnoFailure, State } from '../state/pages.reduce';
import * as PagesActions from '../state/pages.actions';
import { selectcrearAlumnoSuccess } from '../state/pages.reduce';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  formulario: FormGroup;
  msj$: Observable<string>;
  err$: Observable<string>;
  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.iniciarFormulario();
    this.msj$ = this.store.select( selectcrearAlumnoSuccess );
    this.err$ = this.store.select( selectCrearAlumnoFailure );
  }

  iniciarFormulario(): void {
    this.formulario = this.fb.group({
      nombre: ['seiya', Validators.required],
      apellido: ['pegaso', Validators.required],
      edad: ['15', Validators.required],
      password: ['123456', Validators.required]
    });
  }

  enviar(): void {
    this.store.dispatch( PagesActions.crearAlumno({user: this.formulario.value}) );
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  showError() {
    this.toastr.error('Hello world!', 'Toastr fun!');
  }

}
