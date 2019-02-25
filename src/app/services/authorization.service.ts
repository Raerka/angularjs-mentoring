import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { UserService } from './user.service';
import { Observable } from 'rxjs/index';

const AUTH_URL = 'http://localhost:3004/auth/login';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private router: Router,
              private http: HttpClient,
              private userService: UserService,
              private dataService: DataService) {
  }

  login() {
    const login = this.dataService.loginObservable.value;
    const password = this.dataService.passwordObservable.value;
    return this.http.post(`${AUTH_URL}`, {login, password})
      .subscribe(
        (res: any) => {
          localStorage.setItem('token', res.token);
          this.dataService.changeIsAuthorizedValue(true);
          this.gotoCoursesList();
        },
        (err) => {
          console.log(err);
          this.clearUserInfo();
          this.gotoLoginPage();
          alert('Wrong Credentials');
          this.dataService.changeSpinnerStateValue(false);
        });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.clearUserInfo();
    this.gotoLoginPage();
  }

  isAuthenticated(): boolean {
    return this.dataService.isAuthorizedObservable.value;
  }

  gotoLoginPage() {
    this.router.navigate(['login']);
  }

  gotoCoursesList() {
    this.userService.getUserInfo().subscribe((res: any) => {
      this.dataService.changeUserNameValue(res.name);
    });
    this.router.navigate(['courses']);
    this.dataService.changeSpinnerStateValue(false);
  }

  clearUserInfo() {
    this.dataService.changeLoginValue('');
    this.dataService.changePasswordValue('');
    this.dataService.changeUserNameValue('');
    this.dataService.changeIsAuthorizedValue(false);
  }
}
