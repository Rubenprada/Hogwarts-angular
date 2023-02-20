import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseComponent } from './house.component';



@NgModule({
  declarations: [
    HouseComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    HouseComponent
  ]
})
export class HouseModule { }
