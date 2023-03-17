const repeatString = require('./repeatString')
test("test case",() =>{
    expect(repeatString('hey',3)).toBe('heyheyhey')
});
test.skip("test case", () =>{
    expect(repeatString('hey', 10)).toEqual('heyheyheyheyheyheyheyheyheyhey')
});