import { isStringInteger } from 'src/lib/type-checking/type/integer/is-string';

export const isNumberInteger = (value: number) => isStringInteger(value.toString());
