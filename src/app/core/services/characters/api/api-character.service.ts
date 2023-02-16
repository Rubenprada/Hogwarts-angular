import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCharacter } from './api-characters.model';


//endpoint de la api
const API_CHARACTER_URL = 'https://hp-api.onrender.com/api';

@Injectable({
  providedIn: 'root'
})
export class ApiCharacterService {

  constructor(
    //HTTP CLIENT necesario para cualquier petición HTTP
    private http: HttpClient
  ) { }


  //metodo GET que nos trae los personajes
  public getApiProducts(): Observable<ApiCharacter[]> {
    return this.http.get<ApiCharacter[]>(`${API_CHARACTER_URL}/characters`);
  }
}
