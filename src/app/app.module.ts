import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';

import { CoreModule } from './modules/core/core.module';
import { CoursesListModule } from './modules/courses-list/courses-list.module';
import { LoginModule } from './modules/login/login.module';
import { AddCourseModule } from './modules/add-course/add-course.module';

import { AppComponent } from './app.component';

import { UserService } from './services/user.service';
import { AuthorizationService } from './services/authorization.service';
import { CourseService } from './services/course.service';

import { AuthInterceptor } from './interceptors/auth.interceptor';

import { ROUTES } from './app.routes';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES, {useHash: true}),
    BrowserModule,
    HttpClientModule,
    CoreModule,
    CoursesListModule,
    LoginModule,
    AddCourseModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    UserService,
    AuthorizationService,
    CourseService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
