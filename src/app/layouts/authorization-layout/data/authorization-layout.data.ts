import { REGISTER_PAGE } from '@/pages';
import { type Layout } from '@/shared';

export const AUTHORIZATION_LAYOUT: Layout = {
  path: 'authorization',
  loadComponent: () => import('../ui').then((module) => module.AuthorizationLayout),
  children: [REGISTER_PAGE],
};
