const books = require("./books");

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every(({author: {birthYear}}) => {
    birthYear >= 1901 && birthYear <= 2000
  })
}

console.log(everyoneWasBornOnSecXX())