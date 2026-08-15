import { accessTokenInterceptor, refreshTokenInterceptor } from '@/entities';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { type EnvironmentProviders } from '@angular/core';
import { credentialsInterceptor } from '../interceptors';

export function provideHttp(): EnvironmentProviders {
  return provideHttpClient(
    withInterceptors([credentialsInterceptor, accessTokenInterceptor, refreshTokenInterceptor]),
  );
}
