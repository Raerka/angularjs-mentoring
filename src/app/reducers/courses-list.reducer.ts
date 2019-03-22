import * as CoursesList from '../actions/courses-list.actions';
import { Author, CourseItem } from '../services/course.service';

export interface State {
  coursesList: CourseItem[];
  allAuthors: Author[];
}

export const initialState: State = {
  coursesList: [],
  allAuthors: []
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

    case CoursesList.CoursesListActionTypes.FetchAuthorsSuccess: {
      return {
        ...state,
        allAuthors: action.payload.allAuthors
      };
    }

    case CoursesList.CoursesListActionTypes.FetchAuthorsFailure: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const getCoursesList = (state: State) => state.coursesList;
export const getAllAuthors = (state: State) => state.allAuthors;
