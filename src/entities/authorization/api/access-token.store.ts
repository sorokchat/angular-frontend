import { type Storage, STORAGE_SERVICE } from '@/shared';
import { inject, Service, type Signal } from '@angular/core';

@Service()
export class AccessTokenStore {
  private static readonly KEY: string = 'access-token';

  private readonly storage: Storage = inject(STORAGE_SERVICE);

  public getToken(): Signal<string | null | undefined> {
    return this.storage.get<string>(AccessTokenStore.KEY);
  }

  public async setToken(token: string): Promise<void> {
    await this.storage.set(AccessTokenStore.KEY, token);
  }

  public async deleteToken(): Promise<void> {
    await this.storage.delete(AccessTokenStore.KEY);
  }
}
