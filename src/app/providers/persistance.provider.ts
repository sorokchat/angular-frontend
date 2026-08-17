import { PERSISTANCE_SERVICE } from '@/shared';
import { LocalStorageService } from '@/shared/libs/local.storage';
import { type Provider } from '@angular/core';

export function providePersistance(): Provider {
  return {
    provide: PERSISTANCE_SERVICE,
    useClass: LocalStorageService,
  };
}
