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
import { productReducer } from './state/pages.reduce';
import { EffectsModule } from '@ngrx/effects';
// registrar los efectos
import { PagesEffects } from './state/pages.effects';
import { OtroComponent } from './otro/otro.component';

@NgModule({
  declarations: [
    InicioComponent,
    OtroComponent
  ],
  imports: [
    CommonModule,
    rutasPageModule,
    SharedModule,
    StoreModule.forFeature('pages', productReducer),
    EffectsModule.forFeature([PagesEffects])
  ]
})

export class PagesModule { }
