

import { characterIdEndpoit } from './../../core/services/characters/characters.data';

import { ApiCharacter } from './../../core/services/characters/api/api-characters.model';


import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CharactersService } from 'src/app/core/services/characters/characters.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent  {

  public character?: ApiCharacter;

  
  constructor(
    private activateRouter: ActivatedRoute,
    private characterService: CharactersService,
    private router: Router
  ) {
   
    //queryparam de la ruta actual, tengo que dejarlo con el array de personajes
    //creado en una variable porque la api no tiene endpoint get para los id
    this.activateRouter.params.subscribe((params) => {
      const characterId = params['id'];
      this.character = characterIdEndpoit.find(character => character.id === characterId)
      
    })

  }
  //funcion para retornar a la lista de personajes
  public goToCharacter() {
    if(this.character) {
      this.router.navigate(['character-list'])
    }
  }
  
}
