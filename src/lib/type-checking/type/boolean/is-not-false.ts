import { not } from 'src/lib/composition';
import { isFalse } from 'src/lib/type-checking/type/boolean/is-false';
import type { InverseGuard } from 'src/lib/type-checking/types';

export const isNotFalse = not(isFalse) as InverseGuard<false>;
