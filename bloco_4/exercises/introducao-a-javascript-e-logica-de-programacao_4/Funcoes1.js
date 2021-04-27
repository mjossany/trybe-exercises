//1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromo(s) {
  let inverseWord = '';
  for (let index = s.length - 1; index >= 0; index -= 1) {
    inverseWord += s[index];
  }
  if (inverseWord === s) {
    return true;
  } else {
    return false;
  };
};

console.log(palindromo('socos'));