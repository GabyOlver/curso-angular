import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CounterComponent } from './counter/counter.component';
import { BotonesComponent } from './botones/botones.component';

//Definir todas las herramientas
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BotonesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] //El componente appComponent forma parte de este modulo y esta es su herramienta principal
})
export class AppModule { }
