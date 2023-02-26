import { Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  //función para el boton de login
  public loginUser() {
    this.auth.login();
    this.router.navigate(['my-soons'])
    alert('Usuario logeado')
  }

}
