const books = require("./books");

function authorUnique() {
  // escreva seu código aqui
  let birthArray = []
  books.forEach(({author}) => birthArray.push(author.birthYear))

  return birthArray.every((_, index) => birthArray[index] !== birthArray[index - 1])
}

console.log(authorUnique());