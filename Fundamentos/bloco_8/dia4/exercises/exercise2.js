// 2 - Crie uma string com os nomes de todas as pessoas autoras.
const assert = require('assert');
const books = require('./books');

const expectedResult = 'George R. R. MartinJ. R. R. TolkienIsaac AsimovFrank HerbertStephen KingH. P. Lovecraft';

function averageAge() {
  // escreva seu código aqui
  const string = books.reduce((acc, book) => acc += `${book.author.name}, `, '');
  return `${string}.`
}
console.log(averageAge())

// assert.strictEqual(averageAge(), expectedResult);