import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'leatherman-bootstrap';

/**
 * A service used to limit access to a route to administrators
 */
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {
  /**
   * Constructor
   * @param authenticationService - A reference to the authentication service
   * @param router - A reference to the router
   */
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  /**
   * Determine whether a route can be activated
   * @param route - The activated route snapshot
   * @param state - The router state snapshot
   * @returns An observable boolean or a promise of a boolean
   */
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthenticated = this.authenticationService.isAuthenticated();
    if (isAuthenticated) {
      const userRole = this.authenticationService.getPrimaryUserRole();
      if (userRole === 'admin') {
        return true;
      }
    }
    this.router.navigate(['/']);
    return false;
  }
}
