import type { PromiseUnary } from 'src/types/PromiseUnary';

export interface AsyncPipe {
    <P1, P2, Return>(fn1: PromiseUnary<P1, P2>, fn2: PromiseUnary<P2, Return>): PromiseUnary<
        P1,
        Return
    >;
    <P1, P2, P3, Return>(
        fn1: PromiseUnary<P1, P2>,
        fn2: PromiseUnary<P2, P3>,
        fn3: PromiseUnary<P3, Return>
    ): PromiseUnary<P1, Return>;
    <P1, P2, P3, P4, Return>(
        fn1: PromiseUnary<P1, P2>,
        fn2: PromiseUnary<P2, P3>,
        fn3: PromiseUnary<P3, P4>,
        fn4: PromiseUnary<P4, Return>
    ): PromiseUnary<P1, Return>;
    <P1, P2, P3, P4, P5, Return>(
        fn1: PromiseUnary<P1, P2>,
        fn2: PromiseUnary<P2, P3>,
        fn3: PromiseUnary<P3, P4>,
        fn4: PromiseUnary<P4, P5>,
        fn5: PromiseUnary<P5, Return>
    ): PromiseUnary<P1, Return>;
    <P1, P2, P3, P4, P5, P6, Return>(
        fn1: PromiseUnary<P1, P2>,
        fn2: PromiseUnary<P2, P3>,
        fn3: PromiseUnary<P3, P4>,
        fn4: PromiseUnary<P4, P5>,
        fn5: PromiseUnary<P5, P6>,
        fn6: PromiseUnary<P6, Return>
    ): PromiseUnary<P1, Return>;
    <P1, P2, P3, P4, P5, P6, P7, Return>(
        fn1: PromiseUnary<P1, P2>,
        fn2: PromiseUnary<P2, P3>,
        fn3: PromiseUnary<P3, P4>,
        fn4: PromiseUnary<P4, P5>,
        fn5: PromiseUnary<P5, P6>,
        fn6: PromiseUnary<P6, P7>,
        fn7: PromiseUnary<P7, Return>
    ): PromiseUnary<P1, Return>;
    <P1, P2, P3, P4, P5, P6, P7, P8, Return>(
        fn1: PromiseUnary<P1, P2>,
        fn2: PromiseUnary<P2, P3>,
        fn3: PromiseUnary<P3, P4>,
        fn4: PromiseUnary<P4, P5>,
        fn5: PromiseUnary<P5, P6>,
        fn6: PromiseUnary<P6, P7>,
        fn7: PromiseUnary<P7, P8>,
        fn8: PromiseUnary<P8, Return>
    ): PromiseUnary<P1, Return>;
}
export const asyncPipe: AsyncPipe = (...fns: PromiseUnary<unknown, unknown>[]) => {
    return async (x: unknown) =>
        fns.reduce(async (chain, func) => chain.then(func), Promise.resolve(x));
};
