import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HOGWARTS';
  //idiomas
  langs: string[] = [];
  //inicializamos el traductor idiona defecto ingles
  constructor(private translate: TranslateService) {
    //idioma defecto
    translate.setDefaultLang('en');
    translate.use('en');
    //idiomas que soporta
    this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();
   
  }

  //función por si se quiere cambiar idioma
  changeLang(lang: string) {
    this.translate.use(lang)
  }

}
