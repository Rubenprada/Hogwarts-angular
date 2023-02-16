
import { ApiCharacter } from '../../../../core/services/characters/api/api-characters.model';
import { Component,  Input  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  //input para recibir la información del character-list
  @Input() public character?: ApiCharacter;

  public img: string = 'https://static.wikia.nocookie.net/esharrypotter/images/6/63/PM_Mago_desconocido.png/revision/latest/scale-to-width-down/250?cb=20180831033135'
 
  constructor( 
    private router: Router
  ) {   }
  //funcion para navegar al personaje
  public goToDetail() {
    if (this.character) {
      //si hay personaje navegamos a detail + path del id
      
      this.router.navigate(['detail', this.character.id])
    }
  }
}
