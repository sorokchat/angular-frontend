import { Component, inject } from '@angular/core';
import { ChatsSidebarHeader } from '../chats-sidebar-header';
import { SearchChat, SearchChatService } from '@/features';
import { ChatList } from '@/entities';

@Component({
  selector: 'app-chats-sidebar',
  imports: [ChatsSidebarHeader, SearchChat, ChatList],
  templateUrl: './chats-sidebar.html',
  styleUrl: './chats-sidebar.scss',
})
export class ChatsSidebar {
  private readonly searchService: SearchChatService = inject(SearchChatService);

  protected readonly chats = this.searchService.chats;
}
