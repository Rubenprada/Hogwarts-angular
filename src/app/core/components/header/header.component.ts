import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //varible idiomas
  langs: string[] = [];
    
  //variable para logeo
  public isLogged: boolean = false;

  constructor(
    public translate: TranslateService,
    //servicio de logeo
    private auth: AuthService,
    //servicio de navegacion entre rutas
    private router: Router
  ) 
  {
    //idioma defecto ingles
    translate.setDefaultLang('en');
    translate.use('en'),
    //idiomas soportados ingles y español
    this.translate.addLangs(['en', 'es']);
    this.langs = this.translate.getLangs();

  }
  //función para cambiar el idioma en el HTML
  changeLang(lang: string) {
    this.translate.use(lang)
  }

  //funcion para saber si hay usuario logado
  
  public ngOnInit(): void {
    //nos subscribimos y si hay user cambiamos la variable isLoged a true
    this.auth.userLogged$.subscribe((isLogged) => this.isLogged = isLogged)
  }

}
