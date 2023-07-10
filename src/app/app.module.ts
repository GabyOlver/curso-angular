import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CounterComponent } from './counter/counter.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { Form2Component } from './form2/form2.component';
import { OtroFormComponent } from './otro-form/otro-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Formulario3Component } from './formulario3/formulario3.component';
import { ChildrenComponent } from './children/children.component';
import { AddMessageComponent } from './add-message/add-message.component';
import { ListMessageComponent } from './list-message/list-message.component';

//Definir todas las herramientas
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BotonesComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchComponent,
    Form2Component,
    OtroFormComponent,
    Formulario3Component,
    ChildrenComponent,
    AddMessageComponent,
    ListMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //El componente appComponent forma parte de este modulo y esta es su herramienta principal
})
export class AppModule { }
