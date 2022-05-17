import { assert } from 'src/lib/type-checking/assert';
import { isNull } from 'src/lib/type-checking/type/null/is';
import type { Assert } from 'src/lib/type-checking/types';

export const assertNull: Assert<null> = assert(isNull);
