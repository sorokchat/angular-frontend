import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  public readonly type = input<'button' | 'submit' | 'reset'>('submit');
  public readonly disabled = input<boolean>(false);
}
