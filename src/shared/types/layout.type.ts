import { type Route } from '@angular/router';
import { type Page } from './page.type';

export interface Layout extends Page {
  children?: (Layout | Page)[];
  canActivateChild?: Route['canActivateChild'];
}
