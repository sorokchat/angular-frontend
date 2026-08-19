import { ActionIcon } from '@/shared';
import { Component } from '@angular/core';
import { type LucideIcon, LucideSquarePen } from '@lucide/angular';

@Component({
  selector: 'app-create-chat-button',
  imports: [ActionIcon],
  templateUrl: './create-chat-button.html',
  styleUrl: './create-chat-button.scss',
})
export class CreateChatButton {
  protected readonly icon: LucideIcon = LucideSquarePen;
}
