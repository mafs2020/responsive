import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modulo componentes comprtidos
import { SharedModule } from '../shared/shared.module';

// rutas modulo
import { rutasPageModule } from './pages.routes';

// componentes
import { InicioComponent } from './inicio/inicio.component';

// ngrx
import { StoreModule } from '@ngrx/store';
//reducer que necesita el modulo
import { pageReducer } from './state/pages.reduce';
import { EffectsModule } from '@ngrx/effects';

// registrar los efectos
import { PagesEffects } from './state/pages.effects';
import { InterceptorService } from '../interceptor/interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CrearComponent } from './crear/crear.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    InicioComponent,
    CrearComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    rutasPageModule,
    SharedModule,
    StoreModule.forFeature('pages', pageReducer),
    EffectsModule.forFeature([PagesEffects]),
    ReactiveFormsModule,
    FormsModule
  ], 
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ]
})

export class PagesModule { }
