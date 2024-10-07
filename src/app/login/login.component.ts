import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  
  updateField(field: 'email' | 'password', event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      if (field === 'email') {
        this.email = inputElement.value;
      } else if (field === 'password') {
        this.password = inputElement.value;
      }
    }
  }

  login(): void {
    if (this.authService.login(this.email, this.password)) {
      const role = this.authService.getLoggedInUserRole();
      if (role === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user']);
      }
    } else {
      alert('Credenciales incorrectas');
    }
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
