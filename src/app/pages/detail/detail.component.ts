import { Character } from './../../core/services/characters.model';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { characters } from 'src/app/core/services/characters.data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {


  public character?: Character;

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
