import { type Page } from '@/shared';
import { type LucideIcon } from '@lucide/angular';

export type MenuItem = Pick<Page, 'title' | 'path'> & {
  icon: LucideIcon;
};
