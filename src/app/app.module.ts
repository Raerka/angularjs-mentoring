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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LoginModule,
    CoursesListModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    UserService,
    AuthorizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
