import { ApiCharacterService } from './../../core/services/characters/api/api-character.service';
import { ApiCharacter } from '../../core/services/characters/api/api-characters.model';

import { characters } from '../../core/services/characters/characters.data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit{

  //variable pública para que van a ser todos nuestros personajes
  public characters: ApiCharacter[] = [];
  
  
  constructor(
    private charactersService: ApiCharacterService
  ) {}
    //primero se ejecuta el constructor con los servicios de api
    //y para que todo suceda bien, luego usamos el ngoninit para que se
    //ejecute después del constructor, es decir, despues que la el servicio de la api
    //nos traiga los datos
  public ngOnInit() {
    this.charactersService.getApiProducts().subscribe((characatersFromApi) => {
      this.characters = characatersFromApi;
    })
  }
  
}
