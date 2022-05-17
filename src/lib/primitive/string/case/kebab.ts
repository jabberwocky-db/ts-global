import { isUpperCase } from 'src/lib/primitive/string/is/upper-case';

export const toKebabCase = (v: string) =>
    v
        .replace(/ {2}/g, '-')
        .replace(/--/g, '-')
        .split('')
        .map((char, index) => {
            if (char === '-' || !isUpperCase(char)) return char;
            return `${index === 0 ? '' : '-'}${char}`;
        })
        .join('')
        .replace(/--/g, '-')
        .toLowerCase();
