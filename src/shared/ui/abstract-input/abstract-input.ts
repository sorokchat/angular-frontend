import { type InputType } from '../../types';
import { Component, input } from '@angular/core';
import { FormField, type FieldTree } from '@angular/forms/signals';

@Component({
  selector: 'app-abstract-input',
  imports: [FormField],
  templateUrl: './abstract-input.html',
  styleUrl: './abstract-input.scss',
})
export class AbstractInput {
  public readonly field = input.required<FieldTree<string, string, 'writable'>>();
  public readonly placeholder = input<string>('');
  public readonly type = input<InputType>('text');
}
