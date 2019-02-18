import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const AUTH_URL = 'http://localhost:3004/auth/login';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private router: Router,
              private http: HttpClient) {
  }

  login(login: string, password: string) {
    return this.http.post(`${AUTH_URL}`, {login, password});
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.gotoLoginPage();
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      this.gotoLoginPage();
      return false;
    }
    return true;
  }

  gotoLoginPage() {
    this.router.navigate(['login']);
  }
}
