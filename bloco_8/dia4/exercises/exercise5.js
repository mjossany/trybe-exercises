// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const ocorrences = names.reduce((acc, nome) => {
    for (let index of nome) {
      if(index === 'a' || index === 'A') {
        acc += 1;
      }
    }
    return acc;
  }, 0);
  return ocorrences;
}

// console.log(containsA());

assert.deepStrictEqual(containsA(), 20);