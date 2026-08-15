import { computed } from '@angular/core';
import { injectProfile } from './profile.api';

export function injectAuthenticated() {
  const { isFetching, data } = injectProfile();
  return computed<boolean | undefined>(() => isFetching() ? undefined : !!data());
}
