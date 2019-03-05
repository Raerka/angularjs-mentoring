import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../../services/authorization.service';

import { select, Store } from '@ngrx/store';
import { User } from '../../../services/user.service';
import * as fromRoot from '../../../reducers';

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
    private store: Store<fromRoot.State>,
  ) {}

  ngOnInit() {
    this.store.pipe(select(fromRoot.getIsLoggedIn)).subscribe(isLoggedIn => this.isAuthorized = isLoggedIn);
    this.store.pipe(select(fromRoot.getUser)).subscribe((user: User) => this.userName = user.name);
  }

  login() {
    this.authorizationService.login();
  }

  logout() {
    this.authorizationService.logout();
  }
}
