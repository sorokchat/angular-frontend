import { CHATS_PAGE } from '@/pages';
import { type MenuItem } from '@/widgets';
import { LucideMessageCircle } from '@lucide/angular';

export const TOP_MENU: MenuItem[] = [
  {
    ...CHATS_PAGE,
    icon: LucideMessageCircle,
  },
];

export const BOTTOM_MENU: MenuItem[] = [];
