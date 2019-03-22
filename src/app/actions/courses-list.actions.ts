import { Action } from '@ngrx/store';
import { Author, CourseItem } from '../services/course.service';

export enum CoursesListActionTypes {
  FetchCoursesListSuccess = '[CoursesList] Fetch Courses List Success',
  FetchCoursesListFailure = '[CoursesList] Fetch Courses List Failure',
  FetchAuthorsSuccess = '[CoursesList] Fetch Authors Success',
  FetchAuthorsFailure = '[CoursesList] Fetch Authors Failure',
}

export class FetchCoursesListSuccess implements Action {
  readonly type = CoursesListActionTypes.FetchCoursesListSuccess;
  constructor(public payload: {coursesList: CourseItem[]}) {}
}

export class FetchCoursesListFailure implements Action {
  readonly type = CoursesListActionTypes.FetchCoursesListFailure;
  constructor(public payload: any) {}
}

export class FetchAuthorsSuccess implements Action {
  readonly type = CoursesListActionTypes.FetchAuthorsSuccess;
  constructor(public payload: {allAuthors: Author[]}) {}
}

export class FetchAuthorsFailure implements Action {
  readonly type = CoursesListActionTypes.FetchAuthorsFailure;
  constructor(public payload: any) {}
}

export type CoursesListActionsUnion =
  FetchCoursesListSuccess |
  FetchCoursesListFailure |
  FetchAuthorsSuccess |
  FetchAuthorsFailure;
