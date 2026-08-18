import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-loader',
  imports: [],
  templateUrl: './page-loader.html',
  styleUrl: './page-loader.scss',
})
export class PageLoader {
  public readonly isShown = input<boolean>(true);
}
