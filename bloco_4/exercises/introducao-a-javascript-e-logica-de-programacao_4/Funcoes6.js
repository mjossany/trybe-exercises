//6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function sum1toNumber(number) {
  
  let sum = 0;
  for (let index = 1; index <= number; index += 1) {
    sum += index;
  }
  return sum;
};

console.log(sum1toNumber(10));