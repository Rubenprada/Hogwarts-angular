import { TranslateService } from '@ngx-translate/core';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  //varible idiomas
  langs: string[] = [];
    
  constructor(
    public translate: TranslateService
  ) 
  {
    //idioma defecto ingles
    translate.setDefaultLang('en');
    translate.use('en'),
    //idiomas soportados ingles y español
    this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();

  }
  //función para cambiar el idioma en el HTML
  changeLang(lang: string) {
    this.translate.use(lang)
  }

}
