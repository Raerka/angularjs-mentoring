import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchInputObservable = new BehaviorSubject<string>('');
  loginObservable = new BehaviorSubject<string>('');
  passwordObservable = new BehaviorSubject<string>('');

  constructor() { }

  changeSearchInputValue(textFragment: string) {
    if (textFragment.length > 3) {
      this.searchInputObservable.next(textFragment);
    } else {
      this.searchInputObservable.next('');
    }
  }

  changeLoginValue(login: string) {
    this.loginObservable.next(login);
  }

  changePasswordValue(password: string) {
    this.passwordObservable.next(password);
  }
}
