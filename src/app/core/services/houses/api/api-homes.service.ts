import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiHomes } from './api-homes.models';



//variable de la api que atacamos
const HOME_URL = 'http://demo9682669.mockable.io/houses';

@Injectable({
  providedIn: 'root'
})
export class ApiHousesService {

  constructor(
    //necesario para peticion http a api
    private http: HttpClient
  ) { }

  //metodo get para traer datos de la mokApi
  public getApiHouses(): Observable<ApiHomes[]> {
    return this.http.get<ApiHomes[]>(HOME_URL)
  }
}
