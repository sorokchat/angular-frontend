import { type EnvironmentProviders } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';

export function providePwa(): EnvironmentProviders {
  return provideServiceWorker('ngsw-worker.js', {
    enabled: true,
    registrationStrategy: 'registerWhenStable:30000',
  });
}
