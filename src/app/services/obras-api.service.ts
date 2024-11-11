import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iobra } from '../obras.model';

@Injectable({
  providedIn: 'root'
})
export class ObrasApiService {
  private apiUrl = 'http://localhost:8080/obrarest';

  constructor(private http: HttpClient) { }

  fetchData(): Observable<Iobra[]> {
    return this.http.get<Iobra[]>(this.apiUrl);
  }
}
