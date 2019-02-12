import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { CoursesListModule } from './courses-list/courses-list.module';
import { LoginModule } from './login/login.module';
import { AddCourseModule } from './add-course/add-course.module';

import { AppComponent } from './app.component';

import { UserService } from './services/user.service';
import { AuthorizationService } from './services/authorization.service';

import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES, {useHash: true}),
    BrowserModule,
    CoreModule,
    CoursesListModule,
    LoginModule,
    AddCourseModule
  ],
  providers: [
    UserService,
    AuthorizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
