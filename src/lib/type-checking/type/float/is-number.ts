import { isStringFloat } from 'src/lib/type-checking/type/float/is-string';

export const isNumberFloat = (value: number) => isStringFloat(value.toString());
