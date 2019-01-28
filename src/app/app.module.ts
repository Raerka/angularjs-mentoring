import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {CoursesListModule} from './courses-list/courses-list.module';
import {UserService} from './services/user.service';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {LoginModule} from './login/login.module';
import {AuthorizationService} from './services/authorization.service';
import {AddCourseModule} from './add-course/add-course.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    LoginModule,
    CoursesListModule,
    AddCourseModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    UserService,
    AuthorizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
