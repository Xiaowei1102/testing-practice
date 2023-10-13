import { analyzeArray } from "./analyzeArray";


const object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
};
//need to use .toEqual matcher for object. Can not use .toBe
test('take array [1,8,3,4,2,6] and return object with ave: 4; min: 1; max: 8 and len: 6', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(object);
})