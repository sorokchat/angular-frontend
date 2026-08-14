import { DexieService, PERSISTANCE_SERVICE } from '@/shared';
import { type Provider } from '@angular/core';

export function providePersistance(): Provider {
  return {
    provide: PERSISTANCE_SERVICE,
    useClass: DexieService,
  };
}
