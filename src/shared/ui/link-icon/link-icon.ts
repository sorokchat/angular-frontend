import { Component, input } from '@angular/core';
import { type LucideIcon } from '@lucide/angular';
import { Icon } from '../icon';
import { ICON_SIZE } from '../../constants';

@Component({
  selector: 'app-link-icon',
  imports: [Icon],
  templateUrl: './link-icon.html',
  styleUrl: './link-icon.scss',
})
export class LinkIcon {
  public readonly icon = input.required<LucideIcon>();
  public readonly size = input<number>(ICON_SIZE);
}
