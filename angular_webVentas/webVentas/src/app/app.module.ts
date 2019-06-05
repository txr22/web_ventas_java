import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ServicioWebComponent } from './servicio-web/servicio-web.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormularioComponent,
    ServicioWebComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
