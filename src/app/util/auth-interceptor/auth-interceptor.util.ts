import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LeathermanAppConfigInjectionToken, ILeathermanAppConfig } from 'leatherman-bootstrap';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        @Inject(LeathermanAppConfigInjectionToken) private config: ILeathermanAppConfig,
    ) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(async (response: any) => {
                // console.log('AuthInterceptor received a normal result');
                return;
            },
                (err: any) => {
                    console.log('AuthInterceptor received an error');
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401) {
                            console.log('Redirecting to login');
                            this.router.navigate(['/']);
                            return;
                        } else {
                            return;
                        }
                    } else {
                        return;
                    }
                }
            )
        );
    }
}
