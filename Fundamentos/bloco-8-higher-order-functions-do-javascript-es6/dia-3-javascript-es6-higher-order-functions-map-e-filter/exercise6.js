const books = require("./books");

function oldBooks() {
  // escreva seu código aqui
  return books.filter(({releaseYear}) => 2021 - releaseYear > 60)
    .map(({name}) => name)
}

console.log(oldBooks())