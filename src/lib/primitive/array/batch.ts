export const batch = <Item>(items: Item[], size: number): Item[][] => {
    const sets: Item[][] = [];
    let currentSet: Item[] = [];
    for (const item of items) {
        if (currentSet.length === size) {
            sets.push([...currentSet]);
            currentSet = [];
        }
        currentSet.push(item);
    }
    sets.push(currentSet);
    return sets;
};
