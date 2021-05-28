// 4 - Encontre o livro com o maior nome.
const assert = require('assert');
const books = require('./books');

function longestNamedBook() {
  // escreva seu código aqui
  return books.reduce((acc, book) => book.name.length > acc.name.length ? acc === book : acc).name
}
console.log(longestNamedBook());
// assert.deepStrictEqual(longestNamedBook(), expectedResult);