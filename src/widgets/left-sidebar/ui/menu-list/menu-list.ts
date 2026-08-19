import { Component, input } from '@angular/core';
import type { MenuItem } from '../../types';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LinkIcon } from '@/shared';

@Component({
  selector: 'app-menu-list',
  imports: [LinkIcon, RouterLink, RouterLinkActive],
  templateUrl: './menu-list.html',
  styleUrl: './menu-list.scss',
})
export class MenuList {
  public readonly items = input<MenuItem[]>([]);
}
