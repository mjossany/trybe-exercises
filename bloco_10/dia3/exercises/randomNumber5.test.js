const random = require('./randomNumber');

describe('Ex 05 - mock and restore stringUpper', () => {
  const string = jest
    .spyOn(random, 'stringUpper')
    .mockImplementation((string) => string.toLowerCase())
  it('should lower the string received', () => {
    expect(string('TRYBE')).toEqual('trybe');
    expect(string).toHaveBeenCalled();
  })
  it('should restore original implementation', () => {
  random.stringUpper.mockRestore();
  expect(random.stringUpper('trybe')).toEqual('TRYBE');
  expect(random.stringUpper('TRYBE')).not.toEqual('trybe');
  })
})