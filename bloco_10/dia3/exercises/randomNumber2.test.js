let { generateRandomNumber: generate } = require('./randomNumber');

describe('Ex 02 - Testa nova implementação da função generateNumber', () => {
  generate = jest.fn()
    .mockImplementationOnce((a, b) => a / b);

  it('should have be equal to 2', () => {
    expect(generate(10, 5)).toBe(2);
  })
  it('should have been called', () => {
    expect(generate).toHaveBeenCalled();
  })
  it('should not be equal to 2', () => {
    expect(generate(10, 5)).not.toBe(2);
  })
  it('should have been called twice', () => {
    expect(generate).toHaveBeenCalledTimes(2);
  })
})