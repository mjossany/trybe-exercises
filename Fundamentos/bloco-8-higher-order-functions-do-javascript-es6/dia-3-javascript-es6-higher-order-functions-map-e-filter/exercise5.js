const books = require("./books");

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  return books.filter(({genre}) => genre === 'Fantasia' || genre === 'Ficção Científica')
    .map((book) => book.author.name)
    .sort()
}

console.log(fantasyOrScienceFictionAuthors())