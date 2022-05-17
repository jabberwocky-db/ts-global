// @ts-nocheck

import { loop } from 'src/lib/primitive/array/loop';
import type { Binary } from 'src/types/Binary';

export const edit = <Item, NewItem>(
    items: Item[],
    callback: Binary<Item, number, NewItem>
): NewItem[] => {
    return loop(items, (item, i) => {
        // eslint-disable-next-line no-param-reassign
        items[i] = callback(item, i);
    });
};
