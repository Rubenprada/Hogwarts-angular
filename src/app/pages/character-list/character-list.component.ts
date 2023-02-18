import { houses } from './../../core/services/characters/characters.data';

import { House } from './../../core/services/characters/api/api-characters.model';
import { Observable } from 'rxjs';
import { Character } from './../../core/services/characters/character.model';

import { CharactersService } from 'src/app/core/services/characters/characters.service';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit{

  //variable pública para que van a ser todos nuestros personajes
  //con las propiedades del modelo character
  public characters$?: Observable<Character[]>;
  
  //variable para el input de busqueda
  public characterName: string = '';
  public houses?: House;

  public housesEl: House[] = houses;
  constructor(
    private charactersService: CharactersService
  ) {}
    //primero se ejecuta el constructor con los servicios de api
    //y para que todo suceda bien, luego usamos el ngoninit para que se
    //ejecute después del constructor, es decir, despues que la el servicio de la api
    //nos traiga los datos
  public ngOnInit() {
    this.characters$ = this.charactersService.getCharacters()
    
  }
  
}
