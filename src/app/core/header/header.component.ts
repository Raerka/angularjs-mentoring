import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthorizationService]
})
export class HeaderComponent implements OnInit {

  userName = null;

  constructor(
    private authorizationService: AuthorizationService,
  ) {}

  ngOnInit() {
  }

  login() {
    console.log('login without bindings. Waiting rxjx');
  }

  logout() {
    this.authorizationService.logout();
  }

  isAuthenticated() {
    this.userName = JSON.parse(localStorage.getItem('userName'));
    return this.userName;
  }
}
