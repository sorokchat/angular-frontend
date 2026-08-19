import { Component, input } from '@angular/core';

@Component({
  selector: 'app-letter-avatar',
  imports: [],
  templateUrl: './letter-avatar.html',
  styleUrl: './letter-avatar.scss',
})
export class LetterAvatar {
  public readonly letter = input.required<string>();
}
