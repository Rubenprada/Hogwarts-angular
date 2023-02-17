import { ApiHomes } from './api/api-homes.models';
import { Observable, map } from 'rxjs';
import { ApiHousesService } from './api/api-homes.service';
import { Injectable } from '@angular/core';
import { Homes } from './homes.model';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor(
    private apiHousesService: ApiHousesService
  ) { }

  //get de las casa con los datos filtrados
  public getHouses(): Observable<Homes[]> {
    return this.apiHousesService.getApiHouses().pipe(
      map((apiHouses: ApiHomes[]) => {
        return apiHouses.map((apiHouse) => ({
          id: apiHouse.id,
          name: apiHouse.name,
          image: apiHouse.image,
          description: apiHouse.description,
          founder: apiHouse.founder
        }))
      })
    )
  }
}
