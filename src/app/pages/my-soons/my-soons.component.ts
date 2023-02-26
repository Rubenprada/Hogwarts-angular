import { StudentsService } from './../../core/services/students/students.service';
import { switchMap } from 'rxjs';
import { mySoon } from './../../core/services/mySoons/my-soons.model';
import { MySoonsService } from './../../core/services/mySoons/my-soons.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-soons',
  templateUrl: './my-soons.component.html',
  styleUrls: ['./my-soons.component.scss']
})
export class MySoonsComponent implements OnInit {
  //variable que igualamos a nuestra variable que contiene los personajes que vamos a inscribir
  public mySoons: mySoon[] = [];

  constructor(
    private mySoonsService: MySoonsService,
    
  ) {

  }

  //obtenemos los datos de la api
  public ngOnInit() {
    this.mySoonsService.getSoons().subscribe((soonsFromApi) => {
      this.mySoons = soonsFromApi
    })
  }
  
  public removeSoon(id: string) {
    if (!id) {return}
    this.mySoonsService.deleteSoon(id).pipe(
      switchMap((soon) => {
        return this.mySoonsService.getSoons();
      })
    ).subscribe((soonsFromApi) => {
      this.mySoons = soonsFromApi
  
    })
  }

}
