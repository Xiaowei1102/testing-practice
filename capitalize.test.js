import { capitalize } from "./capitalize";

test('take america and return America', () => {
    expect(capitalize('america')).toBe('America');
})