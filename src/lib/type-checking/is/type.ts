// eslint-disable-next-line etc/no-misused-generics
export const isType = <Type>(type: string) => {
    return (value: unknown): value is Type => typeof value === type;
};
