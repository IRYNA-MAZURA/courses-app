import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  readonly loginFormData: { email: string, password: string } = {
    email: '',
    password: ''
  }

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  login(form: NgForm): void {
    this.auth.login(form.value).subscribe(() => {
      console.log('User is logged in')
      this.router.navigate([this.auth.getRedirectUrl()]);
    });
  }

  goToRegistartion(): void {
    this.router.navigate(['/registration']);
  }
}
