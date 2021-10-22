const calculate = require("./exercise1");

const randomNumber = () => {
  return Math.floor(Math.random() * 100 + 1)
}

const parameters = Array.from({ length: 3 }).map(randomNumber)

// calculate(...parameters)
//   .then(response => console.log(`Sucesso: ${response}`))
//   .catch(err => console.log(`Erro: ${err.message}`))
