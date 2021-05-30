// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const books = require('./books');
const assert = require('assert');

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  // escreva seu código aqui
  return books.filter((book) => (2021 - book.releaseYear) > 60).map((book) => book.name);
}
assert.deepStrictEqual(oldBooks(), expectedResult);