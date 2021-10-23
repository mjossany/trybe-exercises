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
    it('retorna um "neutro"', () => {
      const retorno = positivoNegativoNeutro(0)
      expect(retorno).to.equal('neutro')
    });
  });
})