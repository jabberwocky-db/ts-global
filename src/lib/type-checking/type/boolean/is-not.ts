import { not } from 'src/lib/composition';
import { isBoolean } from 'src/lib/type-checking/type/boolean/is';
import type { InverseGuard } from 'src/lib/type-checking/types';

export const isNotBoolean = not(isBoolean) as InverseGuard<boolean>;
