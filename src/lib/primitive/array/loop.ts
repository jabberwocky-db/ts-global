import type { Binary } from 'src/types/Binary';

export const loop = <Item>(items: Item[], callback: Binary<Item, number, unknown>) => {
    let i = 0;
    for (const item of items) {
        if (callback(item, i) === false) break;
        i += 1;
    }
    return items;
};
