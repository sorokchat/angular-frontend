import { PathConfig, type Page } from '@/shared';

export const REGISTER_PAGE: Page = {
  path: PathConfig.register.path,
  title: 'Реєстрація',
  loadComponent: () => import('../ui').then((module) => module.RegisterPage),
};
