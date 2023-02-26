import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //cogemos nuestro token
    const token = 'asdasdasdasd';
    //lo usamos solo en los metodos de POST
    if (request.method === 'POST') {
      //cogemos la request y hacemos una copia´
      request = request.clone({
        //le meto el token a el setheader
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    }
    return next.handle(request);
  }
}
