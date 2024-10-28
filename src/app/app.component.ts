import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SimpsonApiService } from './services/simpson-api.service';
import { Subscriber } from 'rxjs';
import { Ifrase } from './frase.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpClient],

})

//llamado a una api de los simpsons
export class AppComponent implements OnInit {
  frases?: Ifrase[];
  constructor(private api: SimpsonApiService) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    this.api.fetchData().subscribe((data) => {
      this.frases = data;
    });
  }
}
