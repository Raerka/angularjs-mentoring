import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {

  formGroup: FormGroup = null;
  public textFragment = '';

  constructor(
    private dataService: DataService,
    private router: Router,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      textFragment: [this.textFragment]
    });
  }

  findCourse(textFragment: string) {
    this.dataService.changeSearchInputValue(textFragment);
  }

  addCourse() {
    this.router.navigate(['/courses/new']);
  }
}
