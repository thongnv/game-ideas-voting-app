import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = new FormControl('');
  password = new FormControl('');
  error: string | null = null;

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.auth.login(this.username.value ?? '', this.password.value ?? '')) {
      const redirectUrl = this.auth.getRedirectUrl();
      this.router.navigate([redirectUrl || '/']);
    } else {
      this.error = 'Invalid credentials';
    }
  }
}
