import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuardUtil implements CanActivate {
    constructor(
        private router: Router,
    ) { }

    public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = { roles: ["user"] };//Temporary TODO
        
        // If the user is not logged in then redirect to login
        if (!currentUser) {
            this.router.navigate(['/']);
            return false;
        }

        // If no roles are defined for the route then return true
        if (!route.data.roles) {
            return true;
        }

        // Cast the roles
        const routeRoles: string[] = route.data.roles;

        // For each of the route's roles
        for (const routeRole of routeRoles) {
            // For each of the user's roles
            for (const userRole of currentUser.roles) {
                if (routeRole === userRole) {
                    return true;
                }
            }
        }

        // No matching routes were found so return false
        this.router.navigate(['/']);
        return false;
    }
}
