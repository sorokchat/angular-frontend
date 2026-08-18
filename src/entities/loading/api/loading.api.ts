import { Service, signal } from '@angular/core';

@Service()
export class LoadingService {
  private readonly _isLoading = signal<boolean>(false);
  public readonly isLoading = this._isLoading.asReadonly();

  public show(): void {
    this._isLoading.set(true);
  }

  public hide(): void {
    this._isLoading.set(false);
  }
}
