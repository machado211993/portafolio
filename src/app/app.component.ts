import { Component, OnInit } from '@angular/core';
import { SimpsonApiService } from './services/simpson-api.service';
import { Ifrase } from './frase.model';
import { GatosApiService } from './services/gatos-api.service';
import { Igatos } from './gatos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // No necesitas declarar HttpClient aquí, ya que se inyecta en los servicios
})
export class AppComponent implements OnInit {
  frases?: Ifrase[];
  gatos?: Igatos[];

  constructor(private api: SimpsonApiService, private api2: GatosApiService) { }

  ngOnInit(): void {
    this.fetchData();
    this.fetchGatosData();
  }

  fetchData(): void {
    this.api.fetchData().subscribe((data) => {
      this.frases = data;
    });
  }

  fetchGatosData(): void {
    this.api2.fetchData().subscribe((data) => { // Asegúrate de que estás llamando al método correctamente
      this.gatos = data; // Almacena los datos de gatos
    });
  }
}
