// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
const books = require('./books');
const assert = require('assert');

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
  const expectedResult = books.find((book) => book.author.name[7] === '.').name;
  return expectedResult;
}
// console.log(authorWith3DotsOnName());
assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);