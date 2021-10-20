const books = require("./books");

function formatedBookNames() {
  // escreva seu código aqui
  return books.map(({name, genre, author}) => `${name} - ${genre} - ${author.name}`)
}

console.log(formatedBookNames());