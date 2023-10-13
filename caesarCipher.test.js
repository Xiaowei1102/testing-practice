import { caesarCipher } from "./caesarCipher";

test('take afgz and 2 as shift factor, return chib', () => {
    expect(caesarCipher('afgz', 2)).toBe('chib');
})

test('take AfgZ and 2 as shift factor, return ChiB', () => {
    expect(caesarCipher('AfgZ', 2)).toBe('ChiB');
})

test('take AfgZ! and 2 as shift factor, return ChiB!', () => {
    expect(caesarCipher('AfgZ!', 2)).toBe('ChiB!');
})

test('take ! and return !', () => {
    expect(caesarCipher('!', 2)).toBe('!');
})