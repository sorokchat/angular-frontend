import { injectQuery } from '@/shared';
import { AuthorizationService } from './authorization.api';
import { inject } from '@angular/core';

export const PROFILE_KEY = 'profile';

export function injectProfile() {
  const service: AuthorizationService = inject(AuthorizationService);
  return injectQuery([PROFILE_KEY], async () => await service.profile(), true);
}
