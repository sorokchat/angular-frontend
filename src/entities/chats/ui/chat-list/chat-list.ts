import { Component, input } from '@angular/core';
import { ChatCard } from '../chat-card';
import { type GetChatPayload } from '@sorokchat/contracts';

@Component({
  selector: 'app-chat-list',
  imports: [ChatCard],
  templateUrl: './chat-list.html',
  styleUrl: './chat-list.scss',
})
export class ChatList {
  public readonly chats = input.required<GetChatPayload[]>();
}
