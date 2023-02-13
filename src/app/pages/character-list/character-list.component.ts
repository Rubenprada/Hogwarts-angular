
import { characters } from './../../core/services/characters.data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent {

  //variable pública para que van a ser todos nuestros personajes
  public characters = characters;
  
  
  

}
