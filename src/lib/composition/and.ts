import type { Unary } from 'src/types/Unary';

export const and = <Type>(...checks: Unary<Type, boolean>[]) => {
    return (value: Type) =>
        checks.reduce((a, check) => {
            const checkResult = check(value);
            return a && checkResult;
        }, true);
};
