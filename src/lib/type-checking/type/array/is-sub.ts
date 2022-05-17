import { isArray } from 'src/lib/type-checking/type/array/is';
import type { EitherArray } from 'src/types/EitherArray';

export const isSubArray =
    <Type>(guard: (v: unknown) => v is Type) =>
    (v: unknown): v is EitherArray<Type> =>
        isArray(v) && v.map(guard).reduce((prev, next) => (prev ? next || false : false), true);
