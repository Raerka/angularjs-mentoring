import { Route } from '@angular/router';

import { CoursesListComponent } from './modules/courses-list/courses-list/courses-list.component';
import { AddCourseComponent } from './modules/add-course/add-course/add-course.component';
import { NoContentComponent } from './modules/core/no-content/no-content.component';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const ROUTES: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'courses',
    component: CoursesListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/new',
    component: AddCourseComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/:id',
    component: AddCourseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NoContentComponent
  }
];
