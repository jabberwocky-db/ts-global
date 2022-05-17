import { not } from 'src/lib/composition';
import { isUndefined } from 'src/lib/type-checking/type/undefined/is';
import type { InverseGuard } from 'src/lib/type-checking/types';

export const isDefined = not(isUndefined) as InverseGuard<undefined>;
