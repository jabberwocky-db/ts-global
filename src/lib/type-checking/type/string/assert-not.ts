import { assert } from 'src/lib/type-checking/assert';
import { isNotString } from 'src/lib/type-checking/type/string/is-not';
import type { InverseAssert } from 'src/lib/type-checking/types';

export const assertNotString: InverseAssert<string> = assert(isNotString);
