import type { InputType } from '../../types';
import { Component, input } from '@angular/core';
import { type FieldTree } from '@angular/forms/signals';
import { PasswordInput } from '../password-input';
import { AbstractInput } from '../abstract-input/abstract-input';
import { type LucideIcon } from '@lucide/angular';

@Component({
  selector: 'app-input',
  imports: [PasswordInput, AbstractInput],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input {
  public readonly field = input.required<FieldTree<string, string, 'writable'>>();
  public readonly placeholder = input<string>('');
  public readonly type = input<InputType>('text');
  public readonly icon = input<LucideIcon | null>(null);
}
