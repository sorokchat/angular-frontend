import { INPUT_ICON_SIZE } from '@/shared/constants';
import { type InputType } from '../../types';
import { Component, input } from '@angular/core';
import { FormField, type FieldTree } from '@angular/forms/signals';
import { type LucideIcon } from '@lucide/angular';
import { Icon } from '../icon';

@Component({
  selector: 'app-abstract-input',
  imports: [FormField, Icon],
  templateUrl: './abstract-input.html',
  styleUrl: './abstract-input.scss',
})
export class AbstractInput {
  public readonly field = input.required<FieldTree<string, string, 'writable'>>();
  public readonly placeholder = input<string>('');
  public readonly type = input<InputType>('text');
  public readonly icon = input<LucideIcon | null>(null);
  protected readonly iconSize: number = INPUT_ICON_SIZE;
}
