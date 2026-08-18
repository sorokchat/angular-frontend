import { ChatsSidebar, LeftSidebarService } from '@/widgets';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  imports: [],
  templateUrl: './chats.html',
  styleUrl: './chats.scss',
})
export class Chats implements OnInit {
  public ngOnInit(): void {
    this.leftSidebarService.open(ChatsSidebar);
  }

  private readonly leftSidebarService: LeftSidebarService = inject(LeftSidebarService);
}
