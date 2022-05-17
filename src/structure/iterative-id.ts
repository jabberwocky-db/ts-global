export class IterativeId {
    private readonly positionMap: Map<string, string>;
    private readonly firstKey: string;
    private nextId: string;
    constructor(characterSet: Set<string>, initial?: string) {
        const list = [...characterSet];
        this.positionMap = new Map(
            list.map((letter, index): [string, string] => [
                letter,
                list[index + 1] ? list[index + 1] : list[0]
            ])
        );
        this.firstKey = this.positionMap.keys().next().value;
        this.nextId = initial ?? this.firstKey;
    }
    get next() {
        const current = this.nextId;
        this.nextId = getNext(current, this.positionMap, this.firstKey);
        return current;
    }
}

const getNext = (prev: string, positionMap: Map<string, string>, firstKey: string): string => {
    const size = prev.length;
    const chars = prev.split('');
    const next = positionMap.get(chars[chars.length - 1])!;
    const isLast = next === firstKey;
    if (size === 1) {
        if (isLast) return firstKey + firstKey;
        return next;
    }
    if (isLast) {
        chars.pop();
        return `${getNext(chars.join(''), positionMap, firstKey)}${firstKey}`;
    }
    chars.pop();
    return chars.join('') + next;
};
