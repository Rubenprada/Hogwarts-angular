import { CoreModule } from './../../core/core.module';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CharacterListRoutingModule } from './character-list-routing.module';
import { CharacterModule } from './components/character/character.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list.component';

//usar el translate en modulos
import { TranslateModule} from '@ngx-translate/core'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CharacterListComponent,
    
  ],
  imports: [
    CommonModule,
    //hay que importarlo tambien el traductor
    TranslateModule,
    CharacterModule,
    CharacterListRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule,
    CoreModule
  ],
  exports: [
    CharacterListComponent
  ]
})
export class CharacterListModule { }
