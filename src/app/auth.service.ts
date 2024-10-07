import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = JSON.parse(localStorage.getItem('users') || '[]');

  constructor(private router: Router) {
    
    this.initializeAdminUser();
  }

  private initializeAdminUser(): void {
    const adminUser = this.users.find((user: any) => user.role === 'admin');
    if (!adminUser) {
      const defaultAdmin = {
        email: 'admin@example.com',
        password: 'admin123',
        role: 'admin'
      };
      this.users.push(defaultAdmin);
      localStorage.setItem('users', JSON.stringify(this.users));
      // Asegurarse de que `this.users` esté actualizado después de agregar el administrador
      this.users = JSON.parse(localStorage.getItem('users') || '[]');
    }
  }
  

  login(email: string, password: string): boolean {
    const user = this.users.find((user: any) => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  getLoggedInUserRole(): string | null {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
    return loggedInUser ? loggedInUser.role : null;
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
}
