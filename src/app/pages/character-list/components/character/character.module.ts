import { CharacterComponent } from './character.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//usar el translate en modulos
import { TranslateModule} from '@ngx-translate/core'

//importamos fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    CharacterComponent
  ],
  imports: [
    CommonModule,
    //hay que importarlo tambien el traductor
    TranslateModule,
    FontAwesomeModule
  ],
  exports: [
    CharacterComponent
  ]
})
export class CharacterModule { }