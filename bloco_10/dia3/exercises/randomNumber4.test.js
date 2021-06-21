const { generateRandomNumber, stringUpper, stringFirst, concStrings } = require('./randomNumber');

jest.mock('./randomNumber');

describe('Ex 04 - give new implementations to the functions', () => {
  it('stringUpper should lower strings', () => {
    expect.assertions(2);
    stringUpper.mockImplementation((string) => string.toLowerCase());
    expect(stringUpper('RONALDO')).toEqual('ronaldo')
    expect(stringUpper).toHaveBeenCalled()
  });
  it('stringFirst should return the last letter', () => {
    expect.assertions(2);
    stringFirst.mockImplementation((string) => string[string.length - 1]);
    expect(stringFirst('RONALDO')).toEqual('O')
    expect(stringFirst).toHaveBeenCalled()
  });
  it('concString should concatenate three strings', () => {
    concStrings.mockImplementation((str1, str2, str3) => {
      `${str1}${str2}${str3}`;
      expect(concStrings('ronaldo', 'brilha', 'muito')).toEqual('ronaldobrilhamuito');
      expect(concStrings).toHaveBeenCalledTimes(1);
    })
  })
});