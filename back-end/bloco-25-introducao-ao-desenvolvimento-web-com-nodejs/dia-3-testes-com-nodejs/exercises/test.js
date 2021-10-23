const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const positivoNegativoNeutro = require('./exercise1');
const escreveArquivo = require('./exercise4');

const nomeDoArquivo = "testeDosTestes"
const conteudoDoArquivo = "Eu vou me tornar bom em testes!"

describe('Testes do exercício 1, 2 e 3', () => {
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

describe('testes do exercício 4', () => {
  describe('testes da função escreveArquivo', () => {

    before(() => {
      sinon.stub(fs, 'writeFileSync');
    });
    after(() => {
      fs.writeFileSync.restore();
    });

    it('verifica se a função escreveArquivo retorna uma string', () => {
      const retorna = escreveArquivo(nomeDoArquivo, conteudoDoArquivo)
      expect(retorna).to.be.a('string')
    })

    it('verifica se a função retorna o seguinte valor', () => {
      const retorna = escreveArquivo(nomeDoArquivo, conteudoDoArquivo);
      expect(retorna).to.equal('ok');
    });
  })
})