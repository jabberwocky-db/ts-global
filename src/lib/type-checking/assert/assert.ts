import type { Guard } from '../types';
import { assertCondition } from './condition';

export const assert = <Type>(guard: Guard<Type>) => {
    return (v: unknown, message: string): asserts v is Type => {
        const result = guard(v);
        assertCondition(result, message);
    };
};
