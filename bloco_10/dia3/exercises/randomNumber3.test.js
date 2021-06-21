let random = require('./randomNumber');

describe('Ex 03 - Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.', () => {
  const generate = jest
    .spyOn(random, 'generateRandomNumber')
    .mockImplementation((a, b, c) => a * b * c);

  it('should have be equal to 24', () => {
    expect(generate(2, 3, 4)).toBe(24);
    expect(generate).toHaveBeenCalled()
  })
  it('reset generate and give new implementation', () => {
    generate
      .mockReset()
      .mockImplementation((a) => a * 2)
    expect(generate(2, 3, 4)).not.toBe(24);
    expect(generate(2)).toBe(4)
    expect(generate).toHaveBeenCalledTimes(2);
  })
})