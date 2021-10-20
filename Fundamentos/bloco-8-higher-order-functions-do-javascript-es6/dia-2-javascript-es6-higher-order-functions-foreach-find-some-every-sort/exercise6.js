const books = require("./books");

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some(({releaseYear}) => releaseYear >= 1980 && releaseYear <= 1989)
}

console.log(someBookWasReleaseOnThe80s())