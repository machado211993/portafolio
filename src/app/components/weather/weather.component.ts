// src/app/components/weather/weather.component.ts

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  city: string = 'Corrientes';
  weatherData: any;
  errorMessage: string = '';
  isLoading: boolean = false; // Opcional: para mostrar spinner

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    if (!this.city.trim()) {
      this.errorMessage = 'Por favor, ingresa el nombre de una ciudad.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.errorMessage = '';
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage =
          'No se pudo obtener el clima. Verifica el nombre de la ciudad.';
        this.weatherData = null;
        this.isLoading = false;
      },
    });
  }

  onCityChange(): void {
    this.getWeather();
  }
}
