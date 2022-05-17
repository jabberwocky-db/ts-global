import { not } from 'src/lib/composition';
import { isNumber } from 'src/lib/type-checking/type/number/is';
import type { InverseGuard } from 'src/lib/type-checking/types';

export const isNotNumber = not(isNumber) as InverseGuard<number>;
