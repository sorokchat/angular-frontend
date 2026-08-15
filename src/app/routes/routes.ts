import { type Routes } from '@angular/router';
import { LAYOUTS } from '../layouts';
import { PathConfig } from '@/shared';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: PathConfig.chats.fullPath,
    pathMatch: 'full',
  },
  ...LAYOUTS,
];
