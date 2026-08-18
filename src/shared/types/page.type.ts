import { type Route } from '@angular/router';

export interface Page {
  path: Route['path'];
  title?: Route['title'];
  canActivate?: Route['canActivate'];
  loadComponent: Route['loadComponent'];
  runGuardsAndResolvers?: Route['runGuardsAndResolvers'];
  outlet?: Route['outlet'];
}
