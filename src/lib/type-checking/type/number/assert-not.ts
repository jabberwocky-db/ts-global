import { assert } from 'src/lib/type-checking/assert';
import { isNotNumber } from 'src/lib/type-checking/type/number/is-not';
import type { InverseAssert } from 'src/lib/type-checking/types';

export const assertNotNumber: InverseAssert<number> = assert(isNotNumber);
