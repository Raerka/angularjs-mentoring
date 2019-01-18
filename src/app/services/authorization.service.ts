import { Injectable } from '@angular/core';
import {User} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  login(): void {
    console.log('logged in successfully');
    localStorage.setItem('token', 'userToken');
  }

  logout(): void {
    console.log('Logout action');
    localStorage.removeItem('token');
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
}
