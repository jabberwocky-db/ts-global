import { assert } from 'src/lib/type-checking/assert';
import { isNumber } from 'src/lib/type-checking/type/number/is';
import type { Assert } from 'src/lib/type-checking/types';

export const assertNumber: Assert<number> = assert(isNumber);
