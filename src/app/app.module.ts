import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { rutasModuleRoot } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    rutasModuleRoot
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
