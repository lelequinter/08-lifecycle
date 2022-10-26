import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pagia1Component } from './pages/pagia1/pagia1.component';
import { MuestraNombresComponent } from './components/muestra-nombres/muestra-nombres.component';

@NgModule({
  declarations: [
    AppComponent,
    Pagia1Component,
    MuestraNombresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
