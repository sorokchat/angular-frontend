import { Component, input } from '@angular/core';
import type { MenuItem } from '../../types';
import { LucideDynamicIcon } from '@lucide/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  imports: [LucideDynamicIcon, RouterLink, RouterLinkActive],
  templateUrl: './menu-list.html',
  styleUrl: './menu-list.scss',
})
export class MenuList {
  public readonly items = input<MenuItem[]>([]);
}
