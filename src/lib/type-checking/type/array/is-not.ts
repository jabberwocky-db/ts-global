import { not } from 'src/lib/composition';
import { isArray } from 'src/lib/type-checking/type/array/is';
import type { InverseGuard } from 'src/lib/type-checking/types';

export const isNotArray = not(isArray) as InverseGuard<unknown[]>;
