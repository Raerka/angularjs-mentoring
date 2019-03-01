import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {

  public textFragment = '';
  public data = '';

  constructor(private dataService: DataService, private router: Router, ) { }

  ngOnInit() {
    this.dataService.dataSource.subscribe(data => this.data = data);
  }

  findCourse() {
    console.log(`Please find this ${this.textFragment}`);
    this.dataService.changeData(this.textFragment);
  }

  addCourse() {
    this.router.navigate(['/courses/new']);
  }
}
