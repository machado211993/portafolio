import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Ifrase } from '../frase.model';

@Injectable({
  providedIn: 'root' //visible en toda la aplicacion 
})
export class SimpsonApiService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<Ifrase[]> {
    return this.http
      .get('https://thesimpsonsquoteapi.glitch.me/quotes?count=12')
      .pipe(map((res: any) => res as Ifrase[]));

  }
}
