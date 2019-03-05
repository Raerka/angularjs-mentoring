import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private store: Store<fromRoot.State>) { }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(select(fromRoot.getIsLoggedIn), map(isLoggedIn => {
      if (!isLoggedIn) {
        this.router.navigate(['login']);
        return isLoggedIn;
      }
      return isLoggedIn;
    }));
  }
}
