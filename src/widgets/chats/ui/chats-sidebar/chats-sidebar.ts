import { Component } from '@angular/core';
import { ChatsSidebarHeader } from '../chats-sidebar-header';

@Component({
  selector: 'app-chats-sidebar',
  imports: [ChatsSidebarHeader],
  templateUrl: './chats-sidebar.html',
  styleUrl: './chats-sidebar.scss',
})
export class ChatsSidebar { }
