import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router, } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private auth: AuthService, private router: Router) { }

  /* If the user is not logged, don't allow accessing the route / child routes */

  canActivate(): boolean  {
    return this.canAccessRoute();
  }

  canActivateChild(): boolean  {
    return this.canAccessRoute();
  }

  canLoad(): boolean  {
    return this.canAccessRoute();
  }

  private canAccessRoute(): boolean {
    if (this.auth.isLoggedIn) {
      return true;
    }
    this.router.navigateByUrl('/back/login').then();
    return false;
  }


}
