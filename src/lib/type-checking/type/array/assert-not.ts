import { assert } from 'src/lib/type-checking/assert';
import { isNotArray } from 'src/lib/type-checking/type/array/is-not';
import type { InverseAssert } from 'src/lib/type-checking/types';

export const assertNotArray: InverseAssert<unknown[]> = assert(isNotArray);
