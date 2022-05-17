import { assert } from 'src/lib/type-checking/assert';
import { isUndefined } from 'src/lib/type-checking/type/undefined/is';
import type { Assert } from 'src/lib/type-checking/types';

export const assertUndefined: Assert<undefined> = assert(isUndefined);
