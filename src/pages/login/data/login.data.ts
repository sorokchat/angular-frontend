import { type Page } from '@/shared';

export const LOGIN_PAGE: Page = {
  title: 'Вхід',
  path: 'login',
  loadComponent: () => import('../ui').then((module) => module.LoginPage),
};
