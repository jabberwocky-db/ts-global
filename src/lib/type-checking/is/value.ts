export const isValue =
    <Type>(value: Type) =>
    (check: unknown): check is Type =>
        check === value;
