import { assert } from 'src/lib/type-checking/assert';
import { isNotObject } from 'src/lib/type-checking/type/object/is-not';
import type { InverseAssert } from 'src/lib/type-checking/types';

export const assertNotObject: InverseAssert<Record<string, unknown>> = assert(isNotObject);
