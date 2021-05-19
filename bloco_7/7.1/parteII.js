//Questão 1
// const factorial = number => {
//   let numberFactorial = 1;
//   if (number > 0) {
//     for (let index = 2; index <= number; index += 1) {
//       numberFactorial *= index;
//     }
//     console.log(numberFactorial)
//   } else if (number === 0) {
//     console.log('1');
//   }
// }
// factorial(0);

// Resolvendo por recursividade
// const factorial = number => number > 1 ? number * factorial(number - 1) : 1
// console.log(factorial(5));

//Questão 2

const longestWord = string => {
  const stringArray = string.split(" ");
  let maxLength = 0;
  let maxLengthWord = '';

  for (let index = 0; index < stringArray.length; index += 1) {
    if (stringArray[index].length > maxLength) {
      maxLength = stringArray[index].length;
      maxLengthWord = stringArray[index];
    }
  }
  console.log(`A maior palavra da string é "${maxLengthWord}".`);
}
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");