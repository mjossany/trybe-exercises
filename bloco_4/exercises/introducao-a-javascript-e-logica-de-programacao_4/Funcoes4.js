//4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function biggestName(names) {
  let biggest = names[0];
  for (let index in names) {
    if (names[index].length > biggest.length) {
      biggest = names[index];
    }
  }
  return biggest;
}

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));