// 1 - Dada uma matriz de matrizes, transforme em uma única matriz.

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const newArray = arrays.reduce((acc, crr) => {
    crr.forEach((element) => acc.push(element));
    return acc;
  });
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);