import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// componentes comprtidos
import { SharedModule } from '../shared/shared.module';

// rutas componente
import { rutasPageModule } from './pages.routes';

// componentes
import { InicioComponent } from './inicio/inicio.component';

// ngrx
import { StoreModule } from '@ngrx/store';
//reducer ue necesit el modulo
import { productReducer } from './state/pages.reduce';
import { EffectsModule } from '@ngrx/effects';
// registrar los efectos
import { PagesEffects } from './state/pages.effects';

@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    rutasPageModule,
    SharedModule,
    StoreModule.forFeature('pages', productReducer),
    EffectsModule.forFeature ([PagesEffects])
  ]
})

export class PagesModule { }
