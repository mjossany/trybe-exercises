// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
const books = require('./books');
const assert = require('assert');

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames() {
  // escreva seu código aqui
  const arrayString = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
  return arrayString;
}

assert.deepStrictEqual(formatedBookNames(), expectedResult);


