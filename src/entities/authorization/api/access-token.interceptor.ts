import type {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { mergeMap, skip, type Observable } from 'rxjs';
import { AccessTokenStore } from './access-token.store';
import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

export const accessTokenInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const tokenStorage: AccessTokenStore = inject(AccessTokenStore);
  return toObservable(tokenStorage.getToken()).pipe(
    skip(1),
    mergeMap((token) => {
      if (!token) return next(request);
      return next(request.clone({ setHeaders: { Authorization: `Bearer ${token}` } }));
    }),
  );
};
