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

const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(5));