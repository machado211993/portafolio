import { Component, OnInit } from '@angular/core';
import { Igatos } from '../../gatos.model';
import { GatosApiService } from '../../services/gatos-api.service';
import { ItemGatosComponent } from '../item-gatos/item-gatos.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-gatitos',
  standalone: true,
  imports: [ItemGatosComponent, CommonModule],
  templateUrl: './api-gatitos.component.html',
  styleUrl: './api-gatitos.component.css'
})
export class ApiGatitosComponent implements OnInit {
  gatos?: Igatos[]; //aca defino la variable gatos donde se guarda los datos de la api, un arreglo de gatos
  constructor(private api: GatosApiService) { }
  ngOnInit(): void {
    this.fetchGatosData();
  }

  fetchGatosData(): void {
    this.api.fetchDataGatitos().subscribe((data) => { // Asegúrate de que estás llamando al método correctamente
      this.gatos = data; // Almacena los datos de gatos
    });
  }
}
/*Entonces gatos?: Igatos[]; sería un array opcional que almacenará una lista de objetos de gatos,
 cada uno con un id, nombre, edad, y raza.*/ 