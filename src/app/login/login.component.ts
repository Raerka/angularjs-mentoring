import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email = '';
  public password = '';

  constructor(private authorizationService: AuthorizationService) {}

  ngOnInit() {
  }

  login() {
    console.log('email', this.email);
    console.log('password', this.password);
    this.authorizationService.login();
  }

}
