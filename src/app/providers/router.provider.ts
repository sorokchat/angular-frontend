import { type EnvironmentProviders } from '@angular/core';
import { provideRouter as provide } from '@angular/router';
import { ROUTES } from '../routes';

export function provideRouter(): EnvironmentProviders {
  return provide(ROUTES);
}
