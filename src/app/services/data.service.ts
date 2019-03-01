import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchInputObservable = new BehaviorSubject<string>('');
  userNameObservable = new BehaviorSubject<string>('');
  spinnerStateObservable = new BehaviorSubject<boolean>(false);
  loginObservable = new BehaviorSubject<string>('');
  passwordObservable = new BehaviorSubject<string>('');
  isAuthorizedObservable = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  changeSearchInputValue(textFragment: string) {
    if (textFragment.length > 3) {
      this.searchInputObservable.next(textFragment);
    } else {
      this.searchInputObservable.next('');
    }
  }

  changeUserNameValue(userName: string) {
    this.userNameObservable.next(userName);
  }

  changeSpinnerStateValue(isShow: boolean) {
    this.spinnerStateObservable.next(isShow);
  }

  changeLoginValue(login: string) {
    this.loginObservable.next(login);
  }

  changePasswordValue(password: string) {
    this.passwordObservable.next(password);
  }

  changeIsAuthorizedValue(isAuthorized: boolean) {
    this.isAuthorizedObservable.next(isAuthorized);
  }
}
