import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login = '';
  public password = '';

  constructor(
    private authorizationService: AuthorizationService,
    private userService: UserService,
    private router: Router
    ) {}

  ngOnInit() {
  }

  onLogin() {
    this.authorizationService.login(this.login, this.password).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      this.gotoCoursesList();
    });
    this.login = '';
    this.password = '';
  }

  gotoCoursesList() {
    this.userService.getUserInfo().subscribe((res: any) => {
      localStorage.setItem('userName', JSON.stringify(res.name));
    });
    this.router.navigate(['courses']);
  }
}
