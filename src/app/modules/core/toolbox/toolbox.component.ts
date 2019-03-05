import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {

  public textFragment = '';

  constructor(private dataService: DataService, private router: Router, ) {
  }

  ngOnInit() { }

  findCourse(textFragment: string) {
    this.dataService.changeSearchInputValue(textFragment);
  }

  addCourse() {
    this.router.navigate(['/courses/new']);
  }
}
