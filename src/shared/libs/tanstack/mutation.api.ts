import { inject } from '@angular/core';
import { type ErrorPayload } from '@sorokchat/contracts';
import { injectMutation as mutation, QueryClient } from '@tanstack/angular-query-experimental';

export function injectMutation<TInput, TOutput, TError = ErrorPayload>(
  keys: string[],
  callback: (payload: TInput) => Promise<TOutput>,
  refreshKeys: string[],
) {
  const client: QueryClient = inject(QueryClient);
  return mutation<TOutput, TError, TInput, void>(() => ({
    mutationKey: keys,
    mutationFn: callback,
    async onSuccess(): Promise<void> {
      await client.invalidateQueries({ queryKey: refreshKeys });
    },
  }));
}
