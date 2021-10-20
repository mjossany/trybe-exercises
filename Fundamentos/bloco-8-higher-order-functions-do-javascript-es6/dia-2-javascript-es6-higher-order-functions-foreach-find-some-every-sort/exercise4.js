const books = require("./books");

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((a, b) => b.releaseYear - a.releaseYear)
}

console.log(booksOrderedByReleaseYearDesc())