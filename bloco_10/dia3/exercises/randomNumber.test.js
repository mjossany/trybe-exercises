let { generateRandomNumber: generate } = require('./randomNumber');

describe('Ex 01 - Testa a função generateRandomNumber', () => {
  generate = jest.fn()
    .mockReturnValue(10);
  generate();

  it('should have been called', () => {
    expect(generate).toHaveBeenCalled();
  });
  it('should have value equal to 10', () => {
    expect(generate()).toBe(10);
  });
  it('shoul habe been called 2 times', () => {
    expect(generate).toHaveBeenCalledTimes(2);
  });
});
