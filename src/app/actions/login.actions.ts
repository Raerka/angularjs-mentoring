import { Action } from '@ngrx/store';
import { User } from '../services/user.service';

export enum LoginActionTypes {
  Login = '[Login] Login',
  Logout = '[Login] Logout',
  LoginSuccess = '[Login] fromLogin Success',
  LoginFailure = '[Login] fromLogin Failure'
}

export class Login implements Action {
  readonly type = LoginActionTypes.Login;
}

export class Logout implements Action {
  readonly type = LoginActionTypes.Logout;
}

export class LoginSuccess implements Action {
  readonly type = LoginActionTypes.LoginSuccess;
  constructor(public payload: {user: User}) {}
}

export class LoginFailure implements Action {
  readonly type = LoginActionTypes.LoginFailure;
  constructor(public payload: any) {}
}

export type LoginActionsUnion =
  Login |
  Logout |
  LoginSuccess |
  LoginFailure;
