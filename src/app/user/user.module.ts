import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from './user.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    UserService
  ]
})
export class UserModule { }
