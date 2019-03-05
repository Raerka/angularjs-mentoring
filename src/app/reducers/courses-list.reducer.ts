import * as CoursesList from '../actions/courses-list.actions';
import { CourseItem } from '../services/course.service';

export interface State {
  coursesList: CourseItem[];
}

export const initialState: State = {
  coursesList: [],
};

export function reducer(state = initialState, action: CoursesList.CoursesListActionsUnion): State {
  switch (action.type) {
    case CoursesList.CoursesListActionTypes.FetchCoursesListSuccess: {
      return {
        ...state,
        coursesList: action.payload.coursesList
      };
    }
    case CoursesList.CoursesListActionTypes.FetchCoursesListFailure: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const getCoursesList = (state: State) => state.coursesList;
