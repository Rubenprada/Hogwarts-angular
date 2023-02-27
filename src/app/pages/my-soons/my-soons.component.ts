import { Router } from '@angular/router';
import { AuthService } from './../../core/services/auth/auth.service';

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
    private auth: AuthService,
    private router: Router
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

  //funcion para deslogar
  public logoutUser() {
    this.auth.logout();
    this.router.navigate(['home'])
  }
}
