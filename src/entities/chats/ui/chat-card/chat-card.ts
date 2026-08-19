import { Component, computed, input } from '@angular/core';
import { type GetChatPayload } from '@sorokchat/contracts';
import { RouterLink } from '@angular/router';
import { LetterAvatar, PathConfig } from '@/shared';

@Component({
  selector: 'app-chat-card',
  imports: [RouterLink, LetterAvatar],
  templateUrl: './chat-card.html',
  styleUrl: './chat-card.scss',
})
export class ChatCard {
  public readonly chat = input.required<GetChatPayload>();
  protected readonly path = computed<string>(
    () => `${PathConfig.chats.fullPath}/${this.chat().id}`,
  );
}
