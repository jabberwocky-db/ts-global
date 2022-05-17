import { not } from 'src/lib/composition';
import { isString } from 'src/lib/type-checking/type/string/is';
import type { InverseGuard } from 'src/lib/type-checking/types';

export const isNotString = not(isString) as InverseGuard<string>;
