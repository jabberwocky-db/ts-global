import { isArray } from 'src/lib/type-checking';

export const asArray = <Type>(items: Type | Type[]): Type[] => (isArray(items) ? items : [items]);
