import {
  type EnvironmentProviders,
  provideBrowserGlobalErrorListeners as provideListeners,
} from '@angular/core';

export function provideGlobalErrorListeners(): EnvironmentProviders {
  return provideListeners();
}
