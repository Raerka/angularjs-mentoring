import {Injectable} from '@angular/core';

export interface CourseItem {
  id: number;
  title: string;
  creationDate: string;
  duration: number;
  topRated: boolean;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor() {
  }

  static COURSE_ITEMS: CourseItem[] = [
    {
      id: 1,
      title: 'Video Course 1',
      creationDate: '12.20.2018',
      duration: 123,
      topRated: true,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker ' +
        'including versions of Lorem Ipsum.'
    },
    {
      id: 2,
      title: 'Video Course 2',
      creationDate: '12.31.2018',
      duration: 48,
      topRated: false,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ' +
        'sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker ' +
        'including versions of Lorem Ipsum.'
    },
    {
      id: 3,
      title: 'Video Course 3',
      creationDate: '05.29.2018',
      duration: 59,
      topRated: false,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'It has survived not only five centuries, but also the leap into electronic typesetting, ' +
        'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ' +
        'sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker ' +
        'including versions of Lorem Ipsum.'
    }
  ];

  static getCoursesItems(): CourseItem[] {
    return CourseService.COURSE_ITEMS;
  }

  static createCoursesItem(courseItems: CourseItem[], courseItem: CourseItem): void {
    courseItems.push(courseItem);
  }

  static getCoursesItemById(courseItems: CourseItem[], id: number): CourseItem {
    return courseItems.find((item) => id === item.id);
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