import {
  HttpErrorResponse,
  type HttpEvent,
  type HttpHandlerFn,
  type HttpInterceptorFn,
  type HttpRequest,
} from '@angular/common/http';
import { catchError, filter, from, switchMap, type Observable } from 'rxjs';
import { inject } from '@angular/core';
import { AuthorizationService } from './authorization.api';

export const refreshTokenInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const authorizationService: AuthorizationService = inject(AuthorizationService);
  return next(request).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse) {
        const method = error.headers.get('www-authenticate');
        if (method && method === 'Bearer') {
          return from(authorizationService.refreshTokens()).pipe(
            switchMap(({ accessToken }) =>
              next(request.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } })),
            ),
          );
        }
      }
      throw error;
    }),
  );
};
