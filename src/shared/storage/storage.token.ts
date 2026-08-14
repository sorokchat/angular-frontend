import { InjectionToken } from '@angular/core';
import type { Storage } from './storage.interface';

export const STORAGE_SERVICE = new InjectionToken<Storage>('STORAGE_SERVICE');
export const PERSISTANCE_SERVICE = new InjectionToken<Storage>('PERSISTANCE_SERVICE');
export const CACHE_SERVICE = new InjectionToken<Storage>('CACHE_SERVICE');
