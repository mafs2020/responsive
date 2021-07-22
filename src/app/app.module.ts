import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ruts pdre
import { rutasModuleRoot } from './app.routes';

import { AppComponent } from './app.component';

// ngrx
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './app.reduce';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    rutasModuleRoot,
    // StoreDevtoolsModule.instrument({
    //   name: 'APM Demo App DevTools',
    //   maxAge: 25,
    //   logOnly: environment.production
    // }),
    StoreModule.forRoot({'app': counterReducer}),
    // EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
