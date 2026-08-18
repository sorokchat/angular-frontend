import { PathConfig, type Page } from '@/shared';

export const CHATS_SIDEBAR: Page = {
  path: PathConfig.chats.path,
  loadComponent: () => import('../ui').then((module) => module.ChatsSidebar),
  outlet: 'left-sidebar',
};
