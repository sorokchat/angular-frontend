import type { InputType } from '../../types';
import { Component, input } from '@angular/core';
import { type FieldTree, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-input',
  imports: [FormField],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input {
  public readonly field = input.required<FieldTree<string, string, 'writable'>>();
  public readonly placeholder = input<string>('');
  public readonly type = input<InputType>('text');
}
