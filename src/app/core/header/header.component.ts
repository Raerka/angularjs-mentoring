import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../services/user.service';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserService, AuthorizationService]
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private authorizationService: AuthorizationService) {}

  ngOnInit() {
    this.user = this.userService.user;
  }

  login() {
    this.authorizationService.login();
  }

  logout() {
    this.authorizationService.logout();
  }

  isAuthenticated() {
    return this.authorizationService.isAuthenticated();
  }
}
