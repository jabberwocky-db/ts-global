import type { Unary } from 'src/types/Unary';

// eslint-disable-next-line etc/no-misused-generics
export const method = <Type, Return>(methodName: string): Unary<Type, Return> => {
    // @ts-expect-error
    return value => value[methodName]();
};
