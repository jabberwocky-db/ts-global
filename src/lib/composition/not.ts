import type { Unary } from 'src/types/Unary';

export const not = <Value>(fn: Unary<Value, unknown>) => {
    return (v: Value) => !fn(v);
};
