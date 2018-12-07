import {Injectable} from '@angular/core';
import {User} from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  public getUser(): User {
    return {
      id: 1,
      firstName: 'Andrei',
      lastName: 'Kasmykou',
    };
  }
}
