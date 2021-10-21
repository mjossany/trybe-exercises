const books = require("./books");

function oldBooksOrdered() {
  // escreva seu código aqui
  return books.filter(({releaseYear}) => 2021 - releaseYear > 60)
    .sort((a, b) => a.releaseYear - b.releaseYear)
}

console.log(oldBooksOrdered())