import { Component, input } from '@angular/core';
import type { MenuItem } from '../../types';
import { MenuList } from '../menu-list';

@Component({
  selector: 'app-left-sidebar',
  imports: [MenuList],
  templateUrl: './left-sidebar.html',
  styleUrl: './left-sidebar.scss',
})
export class LeftSidebar {
  public readonly topMenu = input<MenuItem[]>([]);
  public readonly bottomMenu = input<MenuItem[]>([]);
}
