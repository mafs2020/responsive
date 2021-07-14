import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// componentes comprtidos
import { SharedModule } from '../shared/shared.module';
// rutas componente
import { rutasPageModule } from './pages.routes';

// componentes
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    rutasPageModule,
    SharedModule
  ]
})

export class PagesModule { }
