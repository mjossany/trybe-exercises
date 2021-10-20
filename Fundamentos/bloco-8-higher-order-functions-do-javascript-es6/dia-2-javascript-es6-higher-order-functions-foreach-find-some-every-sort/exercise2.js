const books = require("./books");

function smallerName() {
  let nameBook = books[0].name;
  // escreva aqui o seu código
  books.forEach(({name}) => {
    if (name.length < nameBook.length) {
      nameBook = name;
    }
  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName());
