import { ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public shouldShowLoading$: ReplaySubject<boolean> = new ReplaySubject<boolean>()

  constructor() { 
    //cuando se inicia siempre esta desactivado
    this.shouldShowLoading$.next(false)
  }

  //cambiarlo a true para que se vea
  public showLoading() {
    this.shouldShowLoading$.next(true)
  }

  //funcion para cambiarlo a false y ocultarlo
  public hideLoading() {
    this.shouldShowLoading$.next(false)
  }
}
