const helloWorld = require('./helloWorld');

test("test case", () => {
    expect( helloWorld( 'Hello world!')).toBe('Hello, world!')
});