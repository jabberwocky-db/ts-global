import type { Unary } from 'src/types/Unary';

export interface Pipe {
    <P1, P2, Return>(fn1: Unary<P1, P2>, fn2: Unary<P2, Return>): Unary<P1, Return>;
    <P1, P2, P3, Return>(fn1: Unary<P1, P2>, fn2: Unary<P2, P3>, fn3: Unary<P3, Return>): Unary<
        P1,
        Return
    >;
    <P1, P2, P3, P4, Return>(
        fn1: Unary<P1, P2>,
        fn2: Unary<P2, P3>,
        fn3: Unary<P3, P4>,
        fn4: Unary<P4, Return>
    ): Unary<P1, Return>;
    <P1, P2, P3, P4, P5, Return>(
        fn1: Unary<P1, P2>,
        fn2: Unary<P2, P3>,
        fn3: Unary<P3, P4>,
        fn4: Unary<P4, P5>,
        fn5: Unary<P5, Return>
    ): Unary<P1, Return>;
    <P1, P2, P3, P4, P5, P6, Return>(
        fn1: Unary<P1, P2>,
        fn2: Unary<P2, P3>,
        fn3: Unary<P3, P4>,
        fn4: Unary<P4, P5>,
        fn5: Unary<P5, P6>,
        fn6: Unary<P6, Return>
    ): Unary<P1, Return>;
    <P1, P2, P3, P4, P5, P6, P7, Return>(
        fn1: Unary<P1, P2>,
        fn2: Unary<P2, P3>,
        fn3: Unary<P3, P4>,
        fn4: Unary<P4, P5>,
        fn5: Unary<P5, P6>,
        fn6: Unary<P6, P7>,
        fn7: Unary<P7, Return>
    ): Unary<P1, Return>;
    <P1, P2, P3, P4, P5, P6, P7, P8, Return>(
        fn1: Unary<P1, P2>,
        fn2: Unary<P2, P3>,
        fn3: Unary<P3, P4>,
        fn4: Unary<P4, P5>,
        fn5: Unary<P5, P6>,
        fn6: Unary<P6, P7>,
        fn7: Unary<P7, P8>,
        fn8: Unary<P8, Return>
    ): Unary<P1, Return>;
}
export const pipe: Pipe = (...fns: Unary<unknown, unknown>[]) => {
    return (x: unknown) => fns.reduce((v, f) => f(v), x);
};
