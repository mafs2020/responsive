import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ruts pdre
import { rutasModuleRoot } from './app.routes';

import { AppComponent } from './app.component';

// tener los formularios
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// httpmodule
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// interceptor
import { InterceptorService } from './interceptor/interceptor.service';
import { rutasLoginModule } from './login/login.routes';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    rutasModuleRoot,
    rutasLoginModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
