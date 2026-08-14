import { PathConfig, type Page } from '@/shared';

export const LOGIN_PAGE: Page = {
  title: 'Вхід',
  path: PathConfig.login.path,
  loadComponent: () => import('../ui').then((module) => module.LoginPage),
};
