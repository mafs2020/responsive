import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// rutas
import { rutasLoginModule } from './login.routes';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoginReducer } from './state/login.reduce';
import { LoginEffects } from './state/login.effects';

// componentes
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from '../interceptor/interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    rutasLoginModule,
    // StoreModule.forFeature('login', LoginReducer),
    // EffectsModule.forFeature([LoginEffects]),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    
  ]
})
export class LoginModule { }
