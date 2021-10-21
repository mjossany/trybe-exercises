const books = require("./books");

function authorWith3DotsOnName() {
  // escreva seu código aqui
  const book = books.filter(({author}) => author.name[7] === '.');
  return book[0].name;
}

console.log(authorWith3DotsOnName())