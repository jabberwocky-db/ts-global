import { assert } from 'src/lib/type-checking/assert';
import { isDefined } from 'src/lib/type-checking/type/undefined/is-not';
import type { InverseAssert } from 'src/lib/type-checking/types';

export const assertDefined: InverseAssert<undefined> = assert(isDefined);
