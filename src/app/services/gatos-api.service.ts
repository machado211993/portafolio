import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Igatos } from '../gatos.model';

@Injectable({
  providedIn: 'root'
})
export class GatosApiService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<Igatos[]> {
    return this.http
      .get('https://api.thecatapi.com/v1/images/search?limit=10')
      .pipe(map((res: any) => res as Igatos[]));

  }
}
