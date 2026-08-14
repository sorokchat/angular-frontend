import { PwaStorage, STORAGE_SERVICE } from '@/shared';
import { type Provider } from '@angular/core';

export function provideStorage(): Provider {
  return {
    provide: STORAGE_SERVICE,
    useClass: PwaStorage,
  };
}
