const sumAll =  require('./sumAll')

test("sum numbers within the range", () =>{
    expect(sumAll(1,4)).toEqual(10)
});