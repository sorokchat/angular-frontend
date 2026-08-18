import { Service, signal, type Signal, type WritableSignal } from '@angular/core';
import { type Storage } from './storage.interface';

@Service()
export class CacheService implements Storage {
  private readonly cache = new Map<string, WritableSignal<unknown>>();

  public get<T>(key: string): Signal<T | null | undefined> {
    const oldSignal = this.cache.get(key) as WritableSignal<T | null | undefined> | undefined;
    if (oldSignal) return oldSignal.asReadonly();
    const newSignal: WritableSignal<T | null | undefined> = signal<T | null | undefined>(null);
    this.cache.set(key, newSignal);
    return newSignal.asReadonly();
  }

  public async set<T>(key: string, data: T): Promise<void> {
    const oldSignal = this.cache.get(key) as WritableSignal<T | null | undefined> | undefined;
    if (oldSignal) {
      oldSignal.set(data);
    } else {
      const newSignal: WritableSignal<T | null | undefined> = signal<T | null | undefined>(data);
      this.cache.set(key, newSignal);
    }
  }

  public async delete(key: string): Promise<void> {
    const oldSignal = this.cache.get(key);
    if (oldSignal) {
      oldSignal.set(null);
    } else {
      const newSignal = signal<unknown | null | undefined>(null);
      this.cache.set(key, newSignal);
    }
  }

  public async clear(): Promise<void> {
    this.cache.forEach((signal) => signal.set(null));
  }
}
