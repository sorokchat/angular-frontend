import { Service, signal, type Type } from '@angular/core';

@Service()
export class LeftSidebarService {
  private readonly componentSource = signal<Type<unknown> | null>(null);
  private readonly isOpenSource = signal<boolean>(false);
  public readonly component = this.componentSource.asReadonly();
  public readonly isOpen = this.isOpenSource.asReadonly();

  public open(component: Type<unknown>): void {
    this.componentSource.set(component);
    this.isOpenSource.set(true);
  }

  public close(): void {
    setTimeout(() => {
      this.isOpenSource.set(false);
      this.componentSource.set(null);
    }, 300);
  }

  public toggle(component: Type<unknown>): void {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open(component);
    }
  }
}
