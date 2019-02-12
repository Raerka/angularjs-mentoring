import { Injectable } from '@angular/core';

import { User } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private router: Router) { }

  login(): void {
    console.log('logged in successfully');
    localStorage.setItem('token', 'userToken');
    this.gotoCoursesList();
  }

  logout(): void {
    console.log('Logout action');
    localStorage.removeItem('token');
    this.gotoLoginPage();
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') === 'userToken';
  }

  getUserInfo(): User {
    const fakeUser: User = {
      id: 3,
      firstName: 'Andrei_Fake',
      lastName: 'Kasmykou_Fake'
    };
    return fakeUser;
  }

  gotoCoursesList() {
    this.router.navigate(['courses']);
  }

  gotoLoginPage() {
    this.router.navigate(['login']);
  }
}
