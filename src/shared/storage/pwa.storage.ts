import { inject, Service, type Signal } from '@angular/core';
import { type Storage } from './storage.interface';
import { CACHE_SERVICE, PERSISTANCE_SERVICE } from './storage.token';
import { toObservable } from '@angular/core/rxjs-interop';

@Service()
export class PwaStorage implements Storage {
  private readonly cache: Storage = inject(CACHE_SERVICE);
  private readonly persistance: Storage = inject(PERSISTANCE_SERVICE);

  public get<T>(key: string): Signal<T | null | undefined> {
    const fromCache = this.cache.get<T>(key);
    if (fromCache()) return fromCache;
    const fromPersistance = this.persistance.get<T>(key);
    toObservable(fromPersistance).subscribe((value) => this.cache.set(key, value));
    return this.cache.get<T>(key);
  }

  public async set<T>(key: string, data: T): Promise<void> {
    await this.persistance.set(key, data);
    await this.cache.set(key, data);
  }

  public async delete(key: string): Promise<void> {
    await this.persistance.delete(key);
    await this.cache.delete(key);
  }

  public async clear(): Promise<void> {
    await this.persistance.clear();
    await this.cache.clear();
  }
}
