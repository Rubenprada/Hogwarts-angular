import { ApimySoon } from './api/api-mySoons.model';
import { Observable, map } from 'rxjs';
import { ApiMySoonsService } from './api/api-my-soons.service';
import { Injectable } from '@angular/core';
import { mySoon } from './my-soons.model';
import { transformSoon } from './my-soons.helper';

@Injectable({
  providedIn: 'root'
})
export class MySoonsService {

  constructor(
    private apiMySoonsService: ApiMySoonsService
  ) { }

  //traer datos filtrados
  public getSoons(): Observable<mySoon[]> {
    return this.apiMySoonsService.getApiSoons().pipe(
      map((soons: ApimySoon[]) => {
        return soons.map((soon) => transformSoon(soon))
      })
    )
  }
  //eliminar un hijo
  public deleteSoon(id: string): Observable<mySoon> {
    return this.apiMySoonsService.deleteApiSoons(id).pipe(
      map((soon) => transformSoon(soon))
    )
  }

  //crear 
  public createSoon(body: mySoon): Observable<mySoon> {
    return this.apiMySoonsService.createApiMySoon(body).pipe(
      map((soon) => transformSoon(soon))
    )
  }
}
