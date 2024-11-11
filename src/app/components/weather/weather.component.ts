// src/app/components/weather/weather.component.ts

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather-service.service';
import { CommonModule } from '@angular/common';


@Component({

  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],

})
export class WeatherComponent implements OnInit {

  city: string = 'Corrientes'; // Ciudad predeterminada
  weatherData: any;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.weatherService.getWeather(this.city).subscribe(
      (data) => {
        this.weatherData = data;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'No se pudo obtener el clima. Verifica el nombre de la ciudad.';
        this.weatherData = null;
      }
    );
  }

  onCityChange(): void {
    this.getWeather();
  }
}

