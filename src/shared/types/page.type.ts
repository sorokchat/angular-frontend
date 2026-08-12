import { type Route } from '@angular/router';

export interface Page {
  path: Route['path'];
  canActivate?: Route['canActivate'];
  loadComponent: Route['loadComponent'];
}
