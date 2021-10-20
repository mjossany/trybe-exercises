const books = require("./books");

function fantasyOrScienceFiction() {
  // escreva seu código aqui
  return books.filter(({genre}) => genre === 'Fantasia' || genre === 'Ficção Científica')
}

console.log(fantasyOrScienceFiction());