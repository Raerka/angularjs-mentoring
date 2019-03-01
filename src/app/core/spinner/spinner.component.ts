import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  public show;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.spinnerStateObservable.subscribe(isShow => this.show = isShow);
  }
}
