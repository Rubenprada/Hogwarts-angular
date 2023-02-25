import { mySoon } from './../my-soons.model';
import { ApimySoon } from './api-mySoons.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//url de la api
const API_SOONS_URL = 'https://63f3b7e3fe3b595e2ee8174b.mockapi.io/api/v2';

@Injectable({
  providedIn: 'root'
})
export class ApiMySoonsService {

  constructor(
    //necesitamos el hhttpClient para hacer peticiones a las api
    private http: HttpClient
  ) { }

  //datos brutos de la api
  public getApiSoons(): Observable<ApimySoon[]> {
    return this.http.get<ApimySoon[]>(`${API_SOONS_URL}/mySoons`)
  }

  //eliminar datos
  public deleteApiSoons(id: string): Observable<ApimySoon> {
    return this.http.delete<ApimySoon>(`${API_SOONS_URL}/mySoons/${id}`)
  }

  //crear nuevo 
  public createApiMySoon(body: mySoon): Observable<ApimySoon> {
    return this.http.post<ApimySoon>(`${API_SOONS_URL}/mySoons`, body)
  }
}
