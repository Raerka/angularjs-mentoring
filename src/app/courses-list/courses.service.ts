import {Injectable} from '@angular/core';

export interface CourseItem {
  id: number;
  title: string;
  creationDate: string;
  duration: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor() {
  }

  static getCoursesItems(): CourseItem[] {
    return [
      {
        id: 1,
        title: 'Video Course 1',
        creationDate: '05.29.2018',
        duration: 27,
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
          'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
          'when an unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
          'It has survived not only five centuries, but also the leap into electronic typesetting, ' +
          'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ' +
          'sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker ' +
          'including versions of Lorem Ipsum.'
      },
      {
        id: 2,
        title: 'Video Course 2',
        creationDate: '05.15.2018',
        duration: 48,
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
          'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
          'when an unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
          'It has survived not only five centuries, but also the leap into electronic typesetting, ' +
          'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ' +
          'sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker ' +
          'including versions of Lorem Ipsum.'
      },
      {
        id: 3,
        title: 'Video Course 3',
        creationDate: '05.29.2018',
        duration: 27,
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
          'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
          'It has survived not only five centuries, but also the leap into electronic typesetting, ' +
          'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ' +
          'sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker ' +
          'including versions of Lorem Ipsum.'
      }
    ];
  }
}
