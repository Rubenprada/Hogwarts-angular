import { TranslateModule } from '@ngx-translate/core';
import { SoonsViewComponent } from './soons-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SoonsViewComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    SoonsViewComponent
  ]
})
export class SoonsViewModule { }
