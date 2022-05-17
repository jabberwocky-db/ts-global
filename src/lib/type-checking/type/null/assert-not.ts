import { assert } from 'src/lib/type-checking/assert';
import { isNotNull } from 'src/lib/type-checking/type/null/is-not';
import type { InverseAssert } from 'src/lib/type-checking/types';

export const assertNotNull: InverseAssert<null> = assert(isNotNull);
