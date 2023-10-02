const reverseString = require('./CC42');

describe('reverseString', () => {
  it('should reverse the string "Code Fellows"', () => {
    const inputStr = 'Code Fellows';
    const expectedOutput = 'swolleF edoC';
    const result = reverseString(inputStr);
    expect(result).toBe(expectedOutput);
  });

  it('should reverse the string "Tacocat"', () => {
    const inputStr = 'Tacocat';
    const expectedOutput = 'tacocaT';
    const result = reverseString(inputStr);
    expect(result).toBe(expectedOutput);
  });

  it('should reverse a complex string', () => {
    const inputStr = "A ship in port is safe, but that's not what ships are built for.";
    const expectedOutput = ".rof tliub era spihs tahw ton s'taht tub ,efas si trop ni pihs A";
    const result = reverseString(inputStr);
    expect(result).toBe(expectedOutput);
  });

  
});
