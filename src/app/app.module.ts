import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    InicioComponent,     // Importar el componente aquí
    SobreMiComponent,    // Importar el componente aquí
    ProyectosComponent,  // Importar el componente aquí
    ContactoComponent    // Importar el componente aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
