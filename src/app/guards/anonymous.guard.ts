import { injectAuthenticated } from '@/entities';
import { PathConfig } from '@/shared';
import { inject, Injectable, Injector } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { CanActivateChild, Router, UrlTree } from '@angular/router';
import { map, Observable, skipWhile } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AnonymousGuard implements CanActivateChild {
  private readonly isAuthenticated = injectAuthenticated();
  private readonly router: Router = inject(Router);
  private readonly injector: Injector = inject(Injector);

  public canActivateChild(): Observable<boolean | UrlTree> {
    return toObservable(this.isAuthenticated, { injector: this.injector }).pipe(
      skipWhile((value) => value === undefined),
      map((isAuthenticated) => {
        if (!isAuthenticated) return true;
        return this.router.parseUrl(PathConfig.chats.fullPath);
      }),
    );
  }
}
