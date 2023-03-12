import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../../services/auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthorizedGuard implements CanLoad {
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
        if (this.authService.isAuthorised) {
            return true;
        }

        const loginUrl = this.authService.getLoginUrl();
        console.log('redirect to', loginUrl);
        return this.router.createUrlTree([loginUrl]);
    }
}