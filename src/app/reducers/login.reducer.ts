import * as Login from '../actions/login.actions';
import { User } from '../services/user.service';

export interface State {
  loggedIn: boolean;
  user: User | null;
}

export const initialState: State = {
  loggedIn: false,
  user: {
    id: null,
    fakeToken: '',
    name: {
      first: '',
      last: ''
    },
    login: '',
    password: ''
  }
};

export function reducer(state = initialState, action: Login.LoginActionsUnion): State {
  switch (action.type) {
    case Login.LoginActionTypes.Login: {
      return {
        ...state,
        loggedIn: true,
      };
    }
    case Login.LoginActionTypes.Logout: {
      return initialState;
    }
    case Login.LoginActionTypes.LoginSuccess: {
      return {
        ...state,
        user: action.payload.user
      };
    }
    default: {
      return state;
    }
  }
}

export const getIsLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;
