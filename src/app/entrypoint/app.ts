import { LoadingService, PageLoader } from '@/entities';
import { LeftSidebarService } from '@/widgets';
import { Component, inject, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageLoader],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly router: Router = inject(Router);
  private readonly loadingService: LoadingService = inject(LoadingService);
  protected readonly leftSidebarService: LeftSidebarService = inject(LeftSidebarService);
  protected isLoading = this.loadingService.isLoading;

  public ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loadingService.show();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loadingService.hide();
      }
    });
  }
}
