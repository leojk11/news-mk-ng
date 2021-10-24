import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class NonAuthGuard implements CanActivate, CanLoad {

  /** Cannot access login/register page when user is logged in. */
  constructor(private auth: AuthService, private router: Router) {
  }

  canLoad(): boolean {
    return this.canAccessRoute();
  }

  canActivate(): boolean {
    return this.canAccessRoute();
  }

  private canAccessRoute(): boolean {
    if (this.auth.isLoggedIn) {
      this.router.navigate(['/back']).then();
      return false;
    }
    return true;
  }
}
