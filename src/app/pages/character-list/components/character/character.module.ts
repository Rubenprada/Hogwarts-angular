import { CharacterComponent } from './character.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//usar el translate en modulos
import { TranslateModule} from '@ngx-translate/core'


@NgModule({
  declarations: [
    CharacterComponent
  ],
  imports: [
    CommonModule,
    //hay que importarlo tambien el traductor
    TranslateModule
  ],
  exports: [
    CharacterComponent
  ]
})
export class CharacterModule { }