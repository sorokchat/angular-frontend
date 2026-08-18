import { PERSISTANCE_SERVICE, CacheService } from '@/shared';
import { type Provider } from '@angular/core';

export function providePersistance(): Provider {
  return {
    provide: PERSISTANCE_SERVICE,
    useClass: CacheService,
  };
}
