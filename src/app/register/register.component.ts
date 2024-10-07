import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    let users = JSON.parse(localStorage.getItem('users') || '[]');

    const existingUser = users.find((user: any) => user.email === this.email);
    if (existingUser) {
      alert('El correo ya está registrado');
      return;
    }

    const newUser = {
      email: this.email,
      password: this.password,
      role: 'user' 
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Usuario registrado con éxito');
    this.router.navigate(['/login']);
  }
}