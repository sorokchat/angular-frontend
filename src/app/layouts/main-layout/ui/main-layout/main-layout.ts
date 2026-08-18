import { LeftSidebar, LeftSidebarService, type MenuItem } from '@/widgets';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BOTTOM_MENU, TOP_MENU } from '../../data';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, LeftSidebar, NgComponentOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  protected topMenu: MenuItem[] = TOP_MENU;
  protected bottomMenu: MenuItem[] = BOTTOM_MENU;
  protected readonly leftSidebarService: LeftSidebarService = inject(LeftSidebarService);
}
