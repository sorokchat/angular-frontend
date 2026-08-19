import { type Signal } from '@angular/core';
import { type ErrorPayload } from '@sorokchat/contracts';
import { injectQuery as query } from '@tanstack/angular-query-experimental';

export function injectQuery<TOutput, TError = ErrorPayload>(
  keys: string[],
  callback: () => Promise<TOutput>,
  enabled: boolean | Signal<boolean>,
  retry: number | boolean = false,
) {
  return query<TOutput, TError>(() => ({
    queryKey: keys,
    queryFn: callback,
    retry,
    enabled,
  }));
}
