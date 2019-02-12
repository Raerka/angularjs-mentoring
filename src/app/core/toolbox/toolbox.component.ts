import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {

  public course = '';
  public data = '';

  constructor(private dataService: DataService, private router: Router, ) { }

  ngOnInit() {
    this.dataService.dataSource.subscribe(data => this.data = data);
  }

  findCourse() {
    console.log(`Please find this ${this.course}`);
    this.dataService.changeData(this.course);
    this.clearInput();
  }

  clearInput() {
    this.course = '';
  }

  addCourse() {
    this.router.navigate(['/courses/new']);
  }
}
