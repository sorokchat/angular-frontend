import { signal, type Signal } from '@angular/core';
import { type Storage } from './storage.interface';

export class LocalStorageService implements Storage {
  public get<T>(key: string): Signal<T | null | undefined> {
    const newSignal = signal<T | null | undefined>(undefined);
    const rawValue = localStorage.getItem(key);
    if (rawValue) {
      newSignal.set(JSON.parse(rawValue) as T);
    } else {
      newSignal.set(null);
    }
    return newSignal;
  }

  public async set<T>(key: string, data: T): Promise<void> {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public async delete(key: string): Promise<void> {
    localStorage.removeItem(key);
  }

  public async clear(): Promise<void> {
    localStorage.clear();
  }
}
