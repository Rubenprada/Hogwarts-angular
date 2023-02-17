import { CharacterModule } from './../character-list/components/character/character.module';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    RouterModule,
    FontAwesomeModule,
    TranslateModule,
    CharacterModule
  ]
})
export class DetailModule { }
