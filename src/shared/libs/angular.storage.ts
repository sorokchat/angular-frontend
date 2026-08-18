import { inject, Service, signal, type Signal } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { firstValueFrom } from 'rxjs';
import { type Storage } from '../storage';

@Service()
export class AngularStorageService implements Storage {
  private readonly storage: StorageMap = inject(StorageMap);

  public get<T>(key: string): Signal<T | null | undefined> {
    const writable = signal<T | null | undefined>(undefined);
    this.loadValue<T>(key).then((value) => writable.set(value));
    return writable.asReadonly();
  }

  public async set<T>(key: string, data: T): Promise<void> {
    try {
      await firstValueFrom(this.storage.set(key, data));
    } catch (error) {
      console.error(`Помилка запису ключа "${key}":`, error);
      throw error;
    }
  }

  public async delete(key: string): Promise<void> {
    try {
      await firstValueFrom(this.storage.delete(key));
    } catch (error) {
      console.error(`Помилка видалення ключа "${key}":`, error);
      throw error;
    }
  }

  public async clear(): Promise<void> {
    try {
      await firstValueFrom(this.storage.clear());
    } catch (error) {
      console.error('Помилка очищення сховища:', error);
      throw error;
    }
  }

  private async loadValue<T>(key: string): Promise<T | null | undefined> {
    try {
      const value = await firstValueFrom(this.storage.get(key));
      return value === undefined ? null : (value as T);
    } catch (error) {
      console.error(`Помилка завантаження ключа "${key}":`, error);
      return null;
    }
  }
}
