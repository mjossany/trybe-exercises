const books = require("./books");

function getNamedBook() {
  // escreva seu código aqui
  return books.find(({name}) => name.length === 26)
}

console.log(getNamedBook());