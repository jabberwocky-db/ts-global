import type { Unary } from 'src/types/Unary';

export const or = <Type>(...checks: Unary<Type, boolean>[]) => {
    return (value: Type) => {
        let passes = false;
        for (const check of checks) {
            if (check(value)) {
                passes = true;
                break;
            }
        }
        return passes;
    };
};
