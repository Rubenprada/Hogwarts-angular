import { LoadingService } from './../loading/loading.service';

import { HousesService } from './../houses/homes.service';
import { ApiCharacter } from './api/api-characters.model';
import { forkJoin, map, Observable, tap } from 'rxjs';
import { ApiCharacterService } from './api/api-character.service';
import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { transformCharacter } from './characters.helpers';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    //llamamos el servicio que nos viene con los personajes de la api
    private apiCharacterService: ApiCharacterService,
    private housesService: HousesService,
    //loading
    private loadingService: LoadingService
  ) { }

  //creamos función para recuperar los personajes, pero con el filtrado,
  //es decir, con el modelo de character para quitar los datos que no usamos
  public getCharacters(): Observable<Character[]> {
    
    this.loadingService.showLoading()
    return this.apiCharacterService.getApiCharacters().pipe(
      map((characters: ApiCharacter[]) => {
        return characters.map((character) => transformCharacter(character))
      }),
      //tap(() => this.loadingService.hideLoading())
      tap(() => this.loadingService.hideLoading())
    )
  }
  

  //GET transformado para obtener detalle con forkjoin para ejecutar las dos peticiones paralelas
  public getCharacterDetail(id: string): Observable<Character> {
    
    return forkJoin([
      this.apiCharacterService.getApiCharacterDetail(id),
      this.housesService.getHouses()
    ]).pipe(
      map(([apiCharacter, houses]) => {
        const selectedHouse = houses.find((house) => house.name === apiCharacter.house);
        return transformCharacter(apiCharacter, selectedHouse)
      })
    )
  }
}
