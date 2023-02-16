import { ApiCharacter } from '../../core/services/characters/api/api-characters.model';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { characters } from 'src/app/core/services/characters/characters.data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {


  public character?: ApiCharacter;

  constructor(
    private activateRouter: ActivatedRoute
  ) {
   
    //queryparam de la ruta actual
    this.activateRouter.params.subscribe((params) => {
      //guardamos param de la id
      const characterId = params['id'];
      this.character = characters.find(character => character.id === characterId)
    })
  }
}
