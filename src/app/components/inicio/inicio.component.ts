import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SobreMiComponent } from '../sobre-mi/sobre-mi.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule, SobreMiComponent, ContactoComponent, ProyectosComponent],

  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
