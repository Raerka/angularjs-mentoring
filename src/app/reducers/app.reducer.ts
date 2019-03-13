import * as App from '../actions/app.actions';

export interface State {
  loading: boolean;
}

export const initialState: State = {
  loading: false,
};

export function reducer(state = initialState, action: App.AppActionsUnion): State {
  switch (action.type) {
    case App.AppActionTypes.LoadingStart: {
      return { loading: true };
    }
    case App.AppActionTypes.LoadingEnd: {
      return { loading: false };
    }
    default: {
      return state;
    }
  }
}

export const getIsLoading = (state: State) => state.loading;
