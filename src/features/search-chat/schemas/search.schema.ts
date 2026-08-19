import z from 'zod';

export const SearchSchema = z.object({
  search: z.string(),
});

export type SearchPayload = z.infer<typeof SearchSchema>;
