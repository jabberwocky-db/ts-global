export interface PromiseUnary<Param, Return> {
    (p: Param): Return | Promise<Return>;
}
