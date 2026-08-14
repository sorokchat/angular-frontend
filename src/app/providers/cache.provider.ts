import { CACHE_SERVICE, CacheService } from '@/shared';
import { type Provider } from '@angular/core';

export function provideCache(): Provider {
  return {
    provide: CACHE_SERVICE,
    useClass: CacheService,
  };
}
