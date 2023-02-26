import { InscriptionStudentComponent } from './../../pages/inscription-student/inscription-student.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<InscriptionStudentComponent> {
  canDeactivate(
    component: InscriptionStudentComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (component?.isStudentCreated || !component?.studentForm?.dirty) {
        return true
      }
      //si le dan a aceptar retorna true y sale de la guardia
      return window.confirm('¿Estás seguro que quieres salir? No se guardaran los cambios del formulario')
  }
  
}
