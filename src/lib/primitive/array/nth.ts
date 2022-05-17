export const nth =
    <Index extends number>(index: Index) =>
    <Items extends any[]>(items: Items): Items[Index] =>
        items[index];
