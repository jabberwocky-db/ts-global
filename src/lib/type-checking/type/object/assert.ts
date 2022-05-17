import { assert } from 'src/lib/type-checking/assert';
import { isObject } from 'src/lib/type-checking/type/object/is';
import type { Assert } from 'src/lib/type-checking/types';

export const assertObject: Assert<Record<string, unknown>> = assert(isObject);
