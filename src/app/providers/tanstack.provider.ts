import { environment } from '@/shared';
import { type Provider } from '@angular/core';
import { provideTanStackQuery, QueryClient } from '@tanstack/angular-query-experimental';
import { withDevtools } from '@tanstack/angular-query-experimental/devtools';

export function provideTanstackQuery(): Provider {
  const client: QueryClient = new QueryClient();
  return environment.production
    ? provideTanStackQuery(client)
    : provideTanStackQuery(client, withDevtools());
}
