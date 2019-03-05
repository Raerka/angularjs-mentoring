import { Component, Injectable, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { DataService } from '../../services/data.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as App from '../../actions/app.actions';

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

  constructor(private authorizationService: AuthorizationService,
              private dataService: DataService,
              private store: Store<fromRoot.State>
  ) {
  }

  ngOnInit() {
    this.dataService.loginObservable.subscribe(login => this.login = login);
    this.dataService.passwordObservable.subscribe(password => this.password = password);
  }

  changeLogin(login: string) {
    this.dataService.changeLoginValue(login);
  }

  changePassword(password: string) {
    this.dataService.changePasswordValue(password);
  }

  onLogin() {
    this.store.dispatch(new App.LoadingStart());
    this.authorizationService.login();
  }
}
