import { injectQuery } from '@/shared';
import { ChatsService } from './chats.api';
import { inject } from '@angular/core';

export const MY_CHATS_KEY = 'my chats';

export function injectMyChats() {
  const service: ChatsService = inject(ChatsService);
  return injectQuery([MY_CHATS_KEY], async () => await service.getMy(), true);
}
