import { type EnvironmentProviders, type Provider } from '@angular/core';
import { provideGlobalErrorListeners } from './browser-global-error-listeners.provider';
import { provideRouter } from './router.provider';
import { providePwa } from './pwa.provider';
import { provideHttp } from './http.provider';

export const PROVIDERS: (Provider | EnvironmentProviders)[] = [
  provideGlobalErrorListeners(),
  provideRouter(),
  providePwa(),
  provideHttp(),
];
