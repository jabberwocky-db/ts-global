import { isSubArray } from 'src/lib/type-checking/type/array/is-sub';
import { isObject } from 'src/lib/type-checking/type/object';

export const isObjectArray = isSubArray(isObject);
