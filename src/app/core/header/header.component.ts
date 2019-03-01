import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthorizationService]
})
export class HeaderComponent implements OnInit {

  userName = null;
  isAuthorized = null;

  constructor(
    private authorizationService: AuthorizationService,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.dataService.userNameObservable.subscribe(name => this.userName = name);
    this.dataService.isAuthorizedObservable.subscribe(isAuthorized => this.isAuthorized = isAuthorized);
  }

  login() {
    this.authorizationService.login();
  }

  logout() {
    this.authorizationService.logout();
  }
}
