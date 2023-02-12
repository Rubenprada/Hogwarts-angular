import { Character } from './../../../../core/services/characters.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  //input para recibir la información del character-list
  @Input() public character?: Character;
}
