const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

const expectedResult = false;
// Solução retirada do repositório do colega de Trybe Roberval Filho https://github.com/rslfilho/trybe-exercises/blob/e10741fe60a0dea3957b213ec3e7748e4b4d0693/exercises/bloco_8/dia_2/exercicio_7.js

function authorUnique() {
  const birthYears = [];
    
  books.forEach((book) => birthYears.push(book.author.birthYear));

  let result = true;

  birthYears.forEach((year) => {
    let counter = 0;
    for (let value of birthYears) {
      if (year === value) counter += 1;
    }
    if (counter > 1) result = false;
  });
  
  return result;
}
assert.strictEqual(authorUnique(), expectedResult);