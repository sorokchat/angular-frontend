import { Service, signal, type Signal } from '@angular/core';
import { type Storage } from '../storage';
import Dexie from 'dexie';

interface Entry {
  key: string;
  value: unknown;
}

@Service()
export class DexieService implements Storage {
  private static readonly STORAGE_NAME: string = 'storage';

  private readonly database: Dexie;

  constructor() {
    this.database = new Dexie('Sorokchat');
    this.database.version(1).stores({
      storage: 'key',
    });
  }

  public get<T>(key: string): Signal<T | null | undefined> {
    const writable = signal<T | null | undefined>(undefined);
    this.loadValue<T>(key).then((value) => writable.set(value));
    return writable.asReadonly();
  }

  public async set<T>(key: string, data: T): Promise<void> {
    await this.database.table<Entry>(DexieService.STORAGE_NAME).put({ key, value: data });
  }

  public async delete(key: string): Promise<void> {
    await this.database.table<Entry>(DexieService.STORAGE_NAME).delete(key);
  }

  public async clear(): Promise<void> {
    await this.database.table(DexieService.STORAGE_NAME).clear();
  }

  private async loadValue<T>(key: string): Promise<T | null> {
    try {
      const entry = await this.database.table<Entry>(DexieService.STORAGE_NAME).get(key);
      if (!entry) return null;
      return entry.value as T;
    } catch (error) {
      console.error(`Помилка завантаження ключа "${key}: "`, error);
      return null;
    }
  }
}
