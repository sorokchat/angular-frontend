import { Component, computed, input, signal } from '@angular/core';
import { type FieldTree } from '@angular/forms/signals';
import { AbstractInput } from '../abstract-input';
import { LucideEye, LucideEyeOff, type LucideIcon } from '@lucide/angular';
import { type InputType } from '../../types';
import { Icon } from '../icon';
import { PASSWORD_ICON_SIZE } from '../../constants';

@Component({
  selector: 'app-password-input',
  imports: [AbstractInput, Icon],
  templateUrl: './password-input.html',
  styleUrl: './password-input.scss',
})
export class PasswordInput {
  public readonly field = input.required<FieldTree<string, string, 'writable'>>();
  public readonly placeholder = input<string>('');
  private readonly isShow = signal<boolean>(false);

  protected readonly icon = computed<LucideIcon>(() => (this.isShow() ? LucideEye : LucideEyeOff));

  protected readonly iconSize: number = PASSWORD_ICON_SIZE;

  protected readonly type = computed<InputType>(() => (this.isShow() ? 'text' : 'password'));

  public toggle(): void {
    this.isShow.update((value) => !value);
  }
}
