import { Injectable } from '@angular/core';
import { COURSE_ITEMS } from './mock-courses';

export interface CourseItem {
  id: number;
  title: string;
  creationDate: string;
  duration: number;
  topRated: boolean;
  description: string;
  authors: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor() {
  }


  static getCoursesItems(): CourseItem[] {
    return COURSE_ITEMS;
  }

  static createCoursesItem(courseItems: CourseItem[], courseItem: CourseItem): void {
    courseItems.push(courseItem);
  }

  static getCoursesItemById(id: number): CourseItem {
    return COURSE_ITEMS.find((item) => +id === item.id);
  }

  static updateCoursesItem(courseItems: CourseItem[], courseItem: CourseItem): void {
    courseItems.forEach((item, index) => {
      if (courseItem.id === item.id) {
        courseItems.splice(index, 1, courseItem);
      }
    });
  }

  static removeCourseItemById(courseItems: CourseItem[], id: number): void {
    courseItems.forEach((item, index) => {
      if (id === item.id) {
        courseItems.splice(index, 1);
      }
    });
  }
}
