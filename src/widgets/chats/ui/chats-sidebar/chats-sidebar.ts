import { Component } from '@angular/core';
import { ChatsSidebarHeader } from '../chats-sidebar-header';
import { SearchChat } from '@/features';

@Component({
  selector: 'app-chats-sidebar',
  imports: [ChatsSidebarHeader, SearchChat],
  templateUrl: './chats-sidebar.html',
  styleUrl: './chats-sidebar.scss',
})
export class ChatsSidebar { }
