import { CreateChatButton } from '@/features';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chats-sidebar-header',
  imports: [CreateChatButton],
  templateUrl: './chats-sidebar-header.html',
  styleUrl: './chats-sidebar-header.scss',
})
export class ChatsSidebarHeader { }
