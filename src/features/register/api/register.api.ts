import { AuthorizationService, PROFILE_KEY } from '@/entities';
import { injectMutation } from '@/shared';
import { inject } from '@angular/core';
import { type NewUserPayload } from '@sorokchat/contracts';

export const REGISTER_KEY = 'register';

export function injectRegister() {
  const service: AuthorizationService = inject(AuthorizationService);
  return injectMutation(
    [REGISTER_KEY],
    async (payload: NewUserPayload) => await service.register(payload),
    [PROFILE_KEY],
  );
}
