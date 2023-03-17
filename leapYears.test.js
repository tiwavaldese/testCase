const leapYears = require('./leapYears')

test("test case", () =>{
    expect(leapYears(2000 && 1985)).toEqual(true || false)
});