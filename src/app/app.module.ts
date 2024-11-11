import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemFraseComponent } from './components/item-frase/item-frase.component';
import { ItemGatosComponent } from './components/item-gatos/item-gatos.component';
import { ObrasApiService } from './services/obras-api.service';
import { ItemObrasComponent } from './components/item-obras/item-obras.component';
import { CommonModule } from '@angular/common';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { FormsModule } from '@angular/forms';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { ApiGatitosComponent } from "./components/api-gatitos/api-gatitos.component";
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherService } from './services/weather-service.service';



@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    InicioComponent, // Importar el componente aquí
    SobreMiComponent, // Importar el componente aquí
    ProyectosComponent, // Importar el componente aquí
    ApiGatitosComponent,
    ContactoComponent,
    ItemFraseComponent,
    ItemGatosComponent,
    ItemObrasComponent,
    PersonajeComponent,
    FormulariosComponent,
    CommonModule,
    FormsModule,
    HttpClientModule // Importar el componente aquí
    ,
    ApiGatitosComponent
  ],
  providers: [HttpClientModule, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
