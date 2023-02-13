import { CharacterModule } from './components/character/character.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list.component';
import { CharacterComponent } from './components/character/character.component';
//usar el translate en modulos
import { TranslateModule} from '@ngx-translate/core'


@NgModule({
  declarations: [
    CharacterListComponent,
    
  ],
  imports: [
    CommonModule,
    //hay que importarlo tambien el traductor
    TranslateModule,
    CharacterModule
  ],
  exports: [
    CharacterListComponent
  ]
})
export class CharacterListModule { }
