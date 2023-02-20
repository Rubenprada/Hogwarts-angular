import { Homes } from './../../core/services/houses/homes.model';

import { Observable } from 'rxjs';
import { HousesService } from './../../core/services/houses/homes.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-house-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.scss']
})
export class HousesListComponent implements OnInit {

  public houses$?: Observable<Homes[]>;

  constructor(
    private housesService: HousesService
  ) {}
  

  public ngOnInit() {
    this.houses$ = this.housesService.getHouses()
    
  }

  

}
