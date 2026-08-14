import { type Signal } from '@angular/core';

export interface Storage {
  get<T>(key: string): Signal<T | null | undefined>;
  set<T>(key: string, data: T): Promise<void>;
  delete(key: string): Promise<void>;
  clear(): Promise<void>;
}
