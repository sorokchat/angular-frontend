import { ICON_SIZE } from '../../constants';
import { Component, input } from '@angular/core';
import { LucideDynamicIcon, type LucideIcon } from '@lucide/angular';

@Component({
  selector: 'app-icon',
  imports: [LucideDynamicIcon],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  public readonly icon = input.required<LucideIcon>();
  public readonly size = input(ICON_SIZE);
}
