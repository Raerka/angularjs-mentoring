import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

export interface User {
  'id': number;
  'fakeToken': string;
  'name': {
    'first': string,
    'last': string
  };
  'login': string;
  'password': string;
}

const USERS_URL = 'http://localhost:3004/users';
const USER_INFO_URL = 'http://localhost:3004/auth/userinfo';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<any> {
    return this.http.post(`${USER_INFO_URL}`, {});
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${USERS_URL}`);
  }
}
