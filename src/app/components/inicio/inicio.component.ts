import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SobreMiComponent } from '../sobre-mi/sobre-mi.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule, SobreMiComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
