const removeFromArray = require('./removeFromArray');

test("remove a single figure", () => {
    expect(removeFromArray([1,2,3,4],3)).toStrictEqual([1,2,4])
});