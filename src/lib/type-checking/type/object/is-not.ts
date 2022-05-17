import { not } from 'src/lib/composition';
import { isObject } from 'src/lib/type-checking/type/object/is';
import type { InverseGuard } from 'src/lib/type-checking/types';

export const isNotObject = not(isObject) as InverseGuard<Record<string, unknown>>;
