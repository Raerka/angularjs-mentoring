import {Injectable} from '@angular/core';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

@Injectable()
export class UserService {
  user: User = {
    id: 1,
    firstName: 'Andrei',
    lastName: 'Kasmykou'
  };

  constructor() {
  }
}
