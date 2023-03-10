import { MySoonsModule } from './pages/my-soons/my-soons.module';

import { StudentsListModule } from './pages/students-list/students-list.module';
import { HousesListModule } from './pages/houses-list/houses-list.module';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CharacterListModule } from './pages/character-list/character-list.module';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MySoonsComponent } from './pages/my-soons/my-soons.component';
import { NgxPaginationModule } from 'ngx-pagination';


//funcion traductor
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CharacterListModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    CoreModule,
    HousesListModule,
    StudentsListModule,
    SharedModule,
    MySoonsModule,
    NgxPaginationModule
    
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
