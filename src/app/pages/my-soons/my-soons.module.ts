import { SoonsViewModule } from './components/soons-view/soons-view.module';
import { MySoonsComponent } from './my-soons.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MySoonsRoutingModule } from './my-soons-routing.module';
import { SoonsViewComponent } from './components/soons-view/soons-view.component';


@NgModule({
  declarations: [
    MySoonsComponent
  ],
  imports: [
    CommonModule,
    MySoonsRoutingModule,
    TranslateModule,
    RouterModule,
    SoonsViewModule
  ],
  exports: [
    MySoonsComponent
  ]
})
export class MySoonsModule { }
