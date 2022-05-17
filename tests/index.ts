// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, test } from '@jest/globals';

import { urlSafeCharacterSet } from '../src/character-sets/url-safe/set';
import { isNull } from '../src/lib/type-checking/type/null/is';
import { IterativeId } from '../src/structure/iterative-id';

test('isValue', () => {
    expect(isNull(null)).toBe(true);
    expect(isNull('null')).toBe(false);
});

test('IterativeId', () => {
    const id = new IterativeId(urlSafeCharacterSet);
    expect(id.next).toBe('a');
    expect(id.next).toBe('b');
    const id2 = new IterativeId(urlSafeCharacterSet, '_');
    expect(id2.next).toBe('_');
    expect(id2.next).toBe('aa');
    const id3 = new IterativeId(urlSafeCharacterSet, 'a_');
    expect(id3.next).toBe('a_');
    expect(id3.next).toBe('ba');
});
