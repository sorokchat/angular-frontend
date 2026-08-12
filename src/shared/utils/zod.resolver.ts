import { PathKind, validateStandardSchema, type SchemaPath } from '@angular/forms/signals';
import { type ZodObject } from 'zod';

type Path<T = object> = SchemaPath<T, 1, PathKind.Root>;

export function withZod(schema: ZodObject): (path: Path) => void {
  return (path: Path) => validateStandardSchema(path, schema);
}
