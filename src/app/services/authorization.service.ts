import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { DataService } from './data.service';
import { User, UserService } from './user.service';

import { Store } from '@ngrx/store';

import * as Login from '../actions/login.actions';
import * as App from '../actions/app.actions';

import * as fromRoot from '../reducers';

const AUTH_URL = 'http://localhost:3004/auth/login';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private router: Router,
              private http: HttpClient,
              private userService: UserService,
              private dataService: DataService,
              private store: Store<fromRoot.State>) {
  }

  login() {
    const login = this.dataService.loginObservable.value;
    const password = this.dataService.passwordObservable.value;
    return this.http.post(`${AUTH_URL}`, {login, password})
      .subscribe(
        (res: any) => {
          localStorage.setItem('token', res.token);
          this.store.dispatch(new Login.Login());
          this.gotoCoursesList();
        },
        (err) => {
          console.log(err);
          this.store.dispatch(new App.LoadingEnd());
          this.clearUserInfo();
          this.gotoLoginPage();
          alert('Wrong Credentials');
        });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.store.dispatch(new Login.Logout());
    this.clearUserInfo();
    this.gotoLoginPage();
  }

  gotoLoginPage() {
    this.router.navigate(['login']);
  }

  gotoCoursesList() {
    this.userService.getUserInfo().subscribe((user: User) => {
      this.store.dispatch(new Login.LoginSuccess({user}));
    });
    this.store.dispatch(new App.LoadingEnd());
    this.router.navigate(['courses']);
  }

  clearUserInfo() {
    this.dataService.changeLoginValue('');
    this.dataService.changePasswordValue('');
  }
}
