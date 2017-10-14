import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderProyectosComponent } from './componentes/slider-proyectos/slider-proyectos.component';
import { ProyectosRealizadosComponent } from './componentes/proyectos-realizados/proyectos-realizados.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SliderProyectosComponent,
    ProyectosRealizadosComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
