import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { WeatherService } from './app/services/weather-service.service';
import { ObrasApiService } from './app/services/obras-api.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    WeatherService,
    ObrasApiService,
  ],
}).catch((err) => console.error(err));
