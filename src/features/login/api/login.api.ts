import { AuthorizationService, PROFILE_KEY } from '@/entities';
import { injectMutation } from '@/shared';
import { inject } from '@angular/core';
import { type LoginPayload } from '@sorokchat/contracts';

export const LOGIN_KEY = 'login';

export function injectLogin() {
  const service: AuthorizationService = inject(AuthorizationService);
  return injectMutation([LOGIN_KEY], async (payload: LoginPayload) => service.login(payload), [
    PROFILE_KEY,
  ]);
}
