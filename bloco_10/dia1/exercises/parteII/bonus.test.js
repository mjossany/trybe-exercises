const { test, describe, expect } = require("@jest/globals")
const { searchEmployee } = require('./bonus')

describe('Testa a função searchEmployee', () => {
  test('Testa se a função searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined()
  })
  test('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function')
  })
  test('Testa se searchEmployee retorna a mensagem "ID não identificada" quando receber um Id inválido', () => {
    expect(() => {searchEmployee('0123-4')}).toThrowError('ID não identificada')
  })
  test('Testa se searchEmployee retorna a mensagem "Informação indisponível" quando receber um parâmetro nao contido no objeto', () => {
    expect(() => {searchEmployee('8579-6', 'middleName')}).toThrowError('Informação indisponível')
  })
  test('Testa se searchEmployee retorna a informação correta', () => {
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates')
  })
})
