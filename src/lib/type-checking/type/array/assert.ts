import { assert } from 'src/lib/type-checking/assert';
import { isArray } from 'src/lib/type-checking/type/array/is';
import type { Assert } from 'src/lib/type-checking/types';

export const assertArray: Assert<unknown[]> = assert(isArray);
