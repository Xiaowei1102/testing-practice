import { Calculator } from "./calculator";

const cal = new Calculator();

test('add 1 + 4 and return 5', () => {
    expect(cal.add(1, 4)).toBe(5);
});

test('subtract 10 from 4 and return 6', () => {
    expect(cal.subtract(10, 4)).toBe(6);
});

test('3 times 4 should be 12', () => {
    expect(cal.multiply(3, 4)).toBe(12);
});

test('3 divided by 4 should be 0.75', () => {
    expect(cal.divide(3, 4)).toBe(0.75);
});