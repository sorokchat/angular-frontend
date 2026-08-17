import { AnonymousGuard } from '../../../guards';
import { LOGIN_PAGE, REGISTER_PAGE } from '@/pages';
import { PathConfig, type Layout } from '@/shared';

export const AUTHORIZATION_LAYOUT: Layout = {
  path: PathConfig.authorization.path,
  loadComponent: () => import('../ui').then((module) => module.AuthorizationLayout),
  children: [REGISTER_PAGE, LOGIN_PAGE],
  canActivateChild: [AnonymousGuard],
  runGuardsAndResolvers: 'always',
};
