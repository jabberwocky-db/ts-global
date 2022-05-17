import { not } from 'src/lib/composition';
import { isNull } from 'src/lib/type-checking/type/null/is';
import type { InverseGuard } from 'src/lib/type-checking/types';

export const isNotNull: InverseGuard<null> = not(isNull) as InverseGuard<null>;
