import { stringDigitSet } from 'src/character-sets';

export const isStringDigit = (
    value: unknown
): value is '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' =>
    stringDigitSet.has(value as '0');
