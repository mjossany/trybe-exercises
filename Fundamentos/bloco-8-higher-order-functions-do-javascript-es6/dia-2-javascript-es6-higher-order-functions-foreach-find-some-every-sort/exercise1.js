const books = require("./books");

function authorBornIn1947() {
  // escreva aqui o seu código
  const book = books.find(({author}) => author.birthYear === 1947)
  return book.author.name;
}

console.log(authorBornIn1947()); 