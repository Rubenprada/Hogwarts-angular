import { HousesListRoutingModule } from './houses-list-routing.module';
import { HouseModule } from './components/house/house.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HousesListComponent } from './houses-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HousesListComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    HouseModule,
    HousesListRoutingModule
  ],
  exports: [
    HousesListComponent
  ]
})
export class HousesListModule { }
