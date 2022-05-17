import { or } from 'src/lib/composition';
import { isFalse } from 'src/lib/type-checking/type/boolean/is-false';
import { isTrue } from 'src/lib/type-checking/type/boolean/is-true';
import type { Guard } from 'src/lib/type-checking/types';

export const isBoolean = or(isTrue, isFalse) as Guard<boolean>;
