import { assert } from 'src/lib/type-checking/assert';
import { isString } from 'src/lib/type-checking/type/string/is';
import type { Assert } from 'src/lib/type-checking/types';

export const assertString: Assert<string> = assert(isString);
