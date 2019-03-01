import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/index';

const COURSES_URL = 'http://localhost:3004/courses';

export interface CourseItem {
  id: number;
  name: string;
  date: string;
  length: number;
  isTopRated: boolean;
  description: string;
  authors: Author[];
}

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) {
  }

  getCoursesItems(): Observable<CourseItem[]> {
    return this.http.get<CourseItem[]>(`${COURSES_URL}`);
  }

  getCurrentNumberCoursesItems(start: number, count: number): Observable<CourseItem[]> {
    return this.http.get<CourseItem[]>(`${COURSES_URL}?start=${start}&count=${count}`);
  }

  findCourseItemByTextInput(textFragment: string): Observable<CourseItem[]> {
    return this.http.get<CourseItem[]>(`${COURSES_URL}?textFragment=${textFragment}`);
  }

  getCoursesItemById(id: number): Observable<CourseItem> {
    return this.http.get<CourseItem>(`${COURSES_URL}/${+id}`);
  }

  removeCourseItemById(id: number): Observable<any> {
    return this.http.delete(`${COURSES_URL}/${+id}`);
  }

  createCoursesItem(courseItem: CourseItem): void {
    console.log(courseItem);
    // this.http.post(`${COURSES_URL}`, courseItem);
  }

  updateCoursesItem(courseItem: CourseItem): void {
    console.log('Updating course item');
  }
}
