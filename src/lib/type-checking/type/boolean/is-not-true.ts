import { not } from 'src/lib/composition';
import { isTrue } from 'src/lib/type-checking/type/boolean/is-true';
import type { InverseGuard } from 'src/lib/type-checking/types';

export const isNotTrue = not(isTrue) as InverseGuard<true>;
