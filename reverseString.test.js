const reverseString = require('./reverseString');

test("test case",() => {
    expect(reverseString('hello there')).toBe('ereht olleh')
});


test.skip("reverse multiple word",() => {
    expect(reverseString('hello there')).toBe('ereht olleh')
});
