const sum = require('./practice1');

describe('Confere função sum', () => {
  test('Testa se sum é uma função', () => {
    expect(typeof sum).toBe('function')
  })
  test('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9)
  })
  test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => {sum(4, '5').toThrow()})
  })
  test('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0)
  })
  test('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => {sum(4, "5").toThrow('parameters must be numbers')})
  })
})