const shuffle = require("../src/shuffle");

describe("testing shuffle function", () => {
  const input = [1,2,3,4,5]
  const output = shuffle(input)

  test('should return an array', ()=>{
    expect(Array.isArray(output)).toBe(true);
  });

  test('should return array of same length as sent in', ()=>{
    expect(output.length).toBe(input.length)
  });
    
  
});

// I got some inspiration from this page lolz: https://stackoverflow.com/questions/56187639/how-to-test-if-an-array-contains-arrays-jest
