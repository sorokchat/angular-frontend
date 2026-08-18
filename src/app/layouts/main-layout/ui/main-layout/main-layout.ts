import { LeftSidebar, type MenuItem } from '@/widgets';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BOTTOM_MENU, TOP_MENU } from '../../data';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, LeftSidebar],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  protected topMenu: MenuItem[] = TOP_MENU;
  protected bottomMenu: MenuItem[] = BOTTOM_MENU;
}
