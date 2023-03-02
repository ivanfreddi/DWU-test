import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: string = '';
  password: string = '';
  loginInvalid = false;

  constructor(private router: Router) {}

  login(): void {
    if ((this.user === 'DWU', this.password === 'DWU2022')) {
      this.router.navigate(['/form']);
    } else {
      this.loginInvalid = true;
    }
  }
}
