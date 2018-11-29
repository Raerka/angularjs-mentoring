import { Component, OnInit } from '@angular/core';
import {User} from '../../user/user.interface';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User = {};

  constructor() {
  }

  ngOnInit() {
    this.user = UserService.getUser();
  }
}
