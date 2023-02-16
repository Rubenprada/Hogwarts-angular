import { ApiCharacter } from './api/api-characters.model';
import { map, Observable } from 'rxjs';
import { ApiCharacterService } from './api/api-character.service';
import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { characters } from './characters.data';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    //llamamos el servicio que nos viene con los personajes de la api
    private apiCharacterService: ApiCharacterService
  ) { }

  //creamos función para recuperar los personajes, pero con el filtrado,
  //es decir, con el modelo de character para quitar los datos que no usamos
  public getCharacters(): Observable<Character[]> {
    return this.apiCharacterService.getApiProducts().pipe(
      map((characters: ApiCharacter[]) => {
        return characters.map((character: ApiCharacter) => {
          delete character.ancestry;
          delete character.alternate_actors;
          return character;
          
        })
      })
    )
  }
  
}
