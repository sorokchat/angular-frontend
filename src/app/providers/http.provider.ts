import { accessTokenInterceptor, refreshTokenInterceptor } from '@/entities';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { type EnvironmentProviders } from '@angular/core';

export function provideHttp(): EnvironmentProviders {
  return provideHttpClient(withInterceptors([accessTokenInterceptor, refreshTokenInterceptor]));
}
