const books = require("./books");

function nameAndAge() {
  // escreva seu código aqui
  return books.map(({author, releaseYear}) => ({
    ["age"]: releaseYear - author.birthYear,
    ["author"]: author.name  
  })).sort((a, b) => a.age - b.age)
}

console.log(nameAndAge())