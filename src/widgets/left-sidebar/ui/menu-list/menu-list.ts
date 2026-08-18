import { Component, input } from '@angular/core';
import type { MenuItem } from '../../types';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ActionIcon } from '@/shared';

@Component({
  selector: 'app-menu-list',
  imports: [ActionIcon, RouterLink, RouterLinkActive],
  templateUrl: './menu-list.html',
  styleUrl: './menu-list.scss',
})
export class MenuList {
  public readonly items = input<MenuItem[]>([]);
}
