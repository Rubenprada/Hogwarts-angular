import { AuthService } from './../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, take, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    //servicio de logeo
    private auth: AuthService,
    //navegacion
    private router: Router
  ) {
    
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.userLogged$.pipe(
        //para que solo escuche una vez, no quede todo el rato
        take(1),
        //hacemos un map para que nos devuelve un true si esta logado y nos deje entrar en la ruta
        //o false si no esta, y no nos deje entrar
        map((isLogged: boolean) => {
          //si hay usuario logado deja entrar
          if (isLogged) {return true};
          //si no, te lleva al login
          return this.router.createUrlTree(['login'])
          
        })
    )
  }
  
}
