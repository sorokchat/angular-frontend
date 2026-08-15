import { PathConfig, type Page } from '@/shared';

export const CHATS_PAGE: Page = {
  path: PathConfig.chats.path,
  title: 'Чати',
  loadComponent: () => import('../ui').then((module) => module.Chats),
};
