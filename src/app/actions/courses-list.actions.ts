import { Action } from '@ngrx/store';
import { CourseItem } from '../services/course.service';

export enum CoursesListActionTypes {
  FetchCoursesListSuccess = '[CoursesList] Fetch Courses List Success',
  FetchCoursesListFailure = '[CoursesList] Fetch Courses List Failure',
}

export class FetchCoursesListSuccess implements Action {
  readonly type = CoursesListActionTypes.FetchCoursesListSuccess;
  constructor(public payload: {coursesList: CourseItem[]}) {}
}

export class FetchCoursesListFailure implements Action {
  readonly type = CoursesListActionTypes.FetchCoursesListFailure;
  constructor(public payload: any) {}
}

export type CoursesListActionsUnion =
  FetchCoursesListSuccess |
  FetchCoursesListFailure;
