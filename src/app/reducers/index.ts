import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromLogin from './login.reducer';
import * as fromCoursesList from './courses-list.reducer';
import * as fromApp from './app.reducer';

export interface State {
  login: fromLogin.State;
  coursesList: fromCoursesList.State;
  app: fromApp.State;
}

export const reducers: ActionReducerMap<State> = {
  login: fromLogin.reducer,
  coursesList: fromCoursesList.reducer,
  app: fromApp.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getLoginState = (state: State) => state.login;
export const getIsLoggedIn = createSelector(getLoginState, fromLogin.getIsLoggedIn);
export const getUser = createSelector(getLoginState, fromLogin.getUser);

export const getCoursesListState = (state: State) => state.coursesList;
export const getCoursesList = createSelector(getCoursesListState, fromCoursesList.getCoursesList);
export const getAllAuthors = createSelector(getCoursesListState, fromCoursesList.getAllAuthors);
export const getCourseItemById = createSelector(
  getCoursesList,
 (coursesList, props) => coursesList.find(element => props.id === element.id));

export const getAppState = (state: State) => state.app;
export const getIsLoading = createSelector(getAppState, fromApp.getIsLoading);
