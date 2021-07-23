import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ruts pdre
import { rutasModuleRoot } from './app.routes';

import { AppComponent } from './app.component';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    rutasModuleRoot,
    StoreDevtoolsModule.instrument({
      name: 'Demo',
      maxAge: 25,
      logOnly: environment.production
    }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
