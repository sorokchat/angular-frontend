import { injectMyChats } from '@/entities';
import { computed, Service, signal } from '@angular/core';
import { type GetChatPayload } from '@sorokchat/contracts';

@Service()
export class SearchChatService {
  private readonly myChats = injectMyChats();
  private readonly _search = signal<string>('');
  public readonly chats = computed<GetChatPayload[]>(() => {
    const chats = this.myChats.data() || [];
    const search = this._search();
    if (search === '') return chats;
    return chats.filter((chat) => chat.name.toLowerCase().includes(search.toLowerCase()));
  });

  public search(name: string): void {
    this._search.set(name);
  }
}
