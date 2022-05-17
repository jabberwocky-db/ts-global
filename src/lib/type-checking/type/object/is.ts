import { and } from 'src/lib/composition';
import { isNotArray } from 'src/lib/type-checking/type/array';
import { isNotNull } from 'src/lib/type-checking/type/null';
import { isObjectType } from 'src/lib/type-checking/type/object/is-type';
import type { Guard } from 'src/lib/type-checking/types';

export const isObject = and(isObjectType, isNotArray, isNotNull) as Guard<Record<string, unknown>>;
