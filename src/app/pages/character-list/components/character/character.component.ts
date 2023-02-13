
import { Character } from './../../../../core/services/characters.model';
import { Component,  Input, Renderer2, ViewChild  } from '@angular/core';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  //input para recibir la información del character-list
  @Input() public character?: Character;

  public img: string = 'https://static.wikia.nocookie.net/esharrypotter/images/6/63/PM_Mago_desconocido.png/revision/latest/scale-to-width-down/250?cb=20180831033135'
 
  constructor( 
    
  ) {
    
    
   
    
    
  }
  
  
}
