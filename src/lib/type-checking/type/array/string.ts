import { isSubArray } from 'src/lib/type-checking/type/array/is-sub';
import { isString } from 'src/lib/type-checking/type/string';

export const isStringArray = isSubArray(isString);
