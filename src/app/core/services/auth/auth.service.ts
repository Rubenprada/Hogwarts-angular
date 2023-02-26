import { ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //variable, que sera un boolean para saber si hay o no user loged
  //el 1 del final es para que se u¡guarde en el buffer la última acción
  //no todas las veces que se logea o deslogea
  public userLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor() {
    //de primeras nunca está logeado
    this.userLogged$.next(false);
  }

  //funcion login
  public login() {
    this.userLogged$.next(true)
  };

  //funcion logout
  public logout() {
    this.userLogged$.next(false)
  }
}
