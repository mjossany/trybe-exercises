// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dicas: Uma string é um array de caracteres, então cada elemento do array é uma letra.

let numeroRomano = 'XIV';
let romanos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const converteRomanosEmInteiro = (numeroRomano) => {
  let arrayInteiros = [];
  for (let index = 0; index < numeroRomano.length; index += 1 ) {
    arrayInteiros.push(romanos[numeroRomano[index]]);
  };
  let soma = arrayInteiros[arrayInteiros.length - 1];
  for (let arrayIndex = arrayInteiros.length - 2; arrayIndex >= 0; arrayIndex -= 1) {
    if (soma > arrayInteiros[arrayIndex]) {
      soma -= arrayInteiros[arrayIndex];
    } else {
      soma += arrayInteiros[arrayIndex];
    };
  };
  return soma;
};
console.log(converteRomanosEmInteiro(numeroRomano));