import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
<<<<<<< .mine

=======
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
>>>>>>> .theirs

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormularioComponent,
<<<<<<< .mine
   
=======

>>>>>>> .theirs
  ],
  imports: [
    BrowserModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
