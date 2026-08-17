import { CHATS_PAGE } from '@/pages';
import { AuthorizedGuard } from '../../../guards';
import { PathConfig, type Layout } from '@/shared';

export const MAIN_LAYOUT: Layout = {
  path: PathConfig.main.path,
  canActivateChild: [AuthorizedGuard],
  loadComponent: () => import('../ui').then((module) => module.MainLayout),
  children: [CHATS_PAGE],
  runGuardsAndResolvers: 'always',
};
