const { convertToCelsius, convertToFahrenheit } = require('./tempConversion')

test("test case", () => {
    expect( convertToCelsius(32)).toEqual(0)
})

test("test case", () => {
    expect( convertToFahrenheit(0)).toEqual(32)
});


test.skip("rounds to 1 decimal", () => {
    expect( convertToCelsius(100)).toEqual(37.8)
})