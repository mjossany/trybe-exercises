const { expect } = require('chai');
const positivoNegativoNeutro = require('./exercise1');

describe('Testes do exercício 1', () => {
  describe('Quando receber um número maior que 0', () => {
    it('retorna uma string', () => {
      const retorno = positivoNegativoNeutro(1)
      expect(retorno).to.be.a('string')
    });
    it('retorna "positivo"', () => {
      const retorno = positivoNegativoNeutro(1)
      expect(retorno).to.equal('positivo')
    });
  });
  
  describe('Quando receber um número menor que 0', () => {
    it('retorna uma string', () => {
      const retorno = positivoNegativoNeutro(-1)
      expect(retorno).to.be.a('string')
    });
    it('retorna "negativo"', () => {
      const retorno = positivoNegativoNeutro(-1)
      expect(retorno).to.equal('negativo')
    });
  });
  
  describe('Quando receber um número igual a 0', () => {
    it('retorna uma string', () => {
      const retorno = positivoNegativoNeutro(0)
      expect(retorno).to.be.a('string')
    });
    it('retorna "neutro"', () => {
      const retorno = positivoNegativoNeutro(0)
      expect(retorno).to.equal('neutro')
    });
  });

  describe('Quando a função recebe como parâmetro um valor que não é do tipo Number', () => {
    it('retorna "o valor deve ser um número"', () => {
      const retorno = positivoNegativoNeutro('quatro')
      expect(retorno).to.equal('o valor deve ser um número')
    })
  })
})