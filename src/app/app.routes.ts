import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ApiGatitosComponent } from './components/api-gatitos/api-gatitos.component';
import { WeatherComponent } from './components/weather/weather.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'sobre-mi', component: SobreMiComponent },
    { path: 'apis', component: ApiGatitosComponent },
    { path: 'clima', component: WeatherComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'personaje/:nombre', component: PersonajeComponent },
    { path: 'formulario', component: FormulariosComponent },
    { path: 'react', component: ReactiveFormsComponent },
];
