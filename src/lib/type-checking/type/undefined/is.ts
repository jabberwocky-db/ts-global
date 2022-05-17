import { isType } from 'src/lib/type-checking/is';

export const isUndefined = isType<undefined>('undefined');
