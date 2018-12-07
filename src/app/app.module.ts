import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {CoursesListModule} from './courses-list/courses-list.module';
import {UserService} from './services/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CoursesListModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
