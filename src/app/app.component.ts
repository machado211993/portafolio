import { Component, OnInit } from '@angular/core';
import { SimpsonApiService } from './services/simpson-api.service';
import { Ifrase } from './frase.model';
import { ObrasApiService } from './services/obras-api.service';
import { Iobra } from './obras.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // No necesitas declarar HttpClient aquí, ya que se inyecta en los servicios
})

export class AppComponent implements OnInit {
  frases?: Ifrase[];
  obras?: Iobra[];
  //inyectamos los servicios de api
  constructor(private api: SimpsonApiService, private api3: ObrasApiService) { }

  ngOnInit(): void {
    this.fetchData();
    this.fetchObrasData();
  }

  fetchData(): void {
    this.api.fetchData().subscribe((data) => {
      this.frases = data;
    });
  }

  fetchObrasData(): void {
    this.api3.fetchData().subscribe((data) => {
      this.obras = data;
    });
  }
  templateDriven = false;
  reactiveForm = false;
  formArray = false;

  toggleTemplateDriven(): void {
    this.templateDriven = !this.templateDriven;
  }

  toggleReactiveForm(): void {
    this.reactiveForm = !this.reactiveForm;
  }

  toggleFormArray = (): void => {
    this.formArray = !this.formArray;
  };

}
