import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  public show;

  constructor(private store: Store<fromRoot.State>) {
    store.pipe(select(fromRoot.getIsLoading)).subscribe(isLoading => this.show = isLoading);
  }

  ngOnInit() { }
}
