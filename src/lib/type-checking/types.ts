export interface Assert<Type> {
    (v: unknown, message: string): asserts v is Type;
}
export interface Guard<Type> {
    (v: unknown): v is Type;
}

export interface InverseAssert<Type> {
    <Other>(v: Type | Other, message: string): asserts v is Other;
}

export interface InverseGuard<Type> {
    <Other>(v: Type | Other): v is Other;
}
