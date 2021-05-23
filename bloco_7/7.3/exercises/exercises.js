// Exercise 1

// const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// // implemente seus testes aqui
// assert.strictEqual(typeof sum, 'function');
// assert.strictEqual(sum(4, 5), 9, 'A soma de 4 e 5 é igual a 9');
// assert.strictEqual(sum(0, 0), 0, 'A soma de 0 e 0 é igual a 0');
// assert.throws(() => {
//   sum(4, '5');
// });
// assert.throws(() => {
//   sum(4, '5');
// }, /^Error: parameters must be numbers$/);
// -------------------------------------------------------------------------------

// Exercises 2

// const assert = require('assert');

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

// implemente seus testes aqui
// assert.strictEqual(typeof myRemove, 'function');
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
// assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// let arr = [1, 2, 3, 4];
// myRemove(arr, 3);
// assert.deepStrictEqual(arr, [1, 2, 3, 4]);
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
// -------------------------------------------------------------------------------

// Exercício 3

// const assert = require('assert');

// function myRemoveWithoutCopy(arr, item) {
//   for (let index = 0, len = arr.length; index < len; index += 1) {
//     if (arr[index] === item) {
//       arr.splice(index, 1);
//       index -= 1;
//       len -= 1;
//     }
//   }

//   return arr;
// }

// // implemente seus testes aqui
// assert.deepStrictEqual(typeof myRemoveWithoutCopy, 'function');
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
// assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// const arr = [1, 2, 3, 4];
// myRemoveWithoutCopy(arr, 1);
// assert.notDeepStrictEqual(arr, [1, 2, 3, 4]);
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);
// -------------------------------------------------------------------------------

// Exercício 4

// const assert = require('assert');

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

// // implemente seus testes aqui
// assert.strictEqual(typeof myFizzBuzz, 'function');
// assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
// assert.strictEqual(myFizzBuzz(6), 'fizz');
// assert.strictEqual(myFizzBuzz(10), 'buzz');
// assert.strictEqual(myFizzBuzz(11), 11);
// assert.strictEqual(myFizzBuzz('xablau'), false);
// console.log(myFizzBuzz());

//-------------------------------------------------------------------------------

// Exercício 5

// const assert = require('assert');

// const obj1 = {
//   title: 'My Title',
//   description: 'My Description',
// };

// const obj2 = {
//   description: 'My Description',
//   title: 'My Title',
// };

// const obj3 = {
//   title: 'My Different Title',
//   description: 'My Description',
// };

// implemente seus testes aqui

// assert.deepStrictEqual(obj1, obj2);
// assert.notDeepStrictEqual(obj1, obj3);
// assert.notDeepStrictEqual(obj2, obj3);

// -------------------------------------------------------------------------------

// Parte 2
// Exercício 1

// const assert = require('assert');
// // escreva a função addOne aqui

// const addOne = (arr) => {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     newArr.push(arr[index] + 1);
//   }
//   return newArr;
// };

// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);

// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected, 'O output deve ser [32, 58, 13, 6]');
// assert.deepStrictEqual(myArray, unchanged, 'myArray deve ser [31, 57, 12, 5]');

// -------------------------------------------------------------------------------

// Exercício 2

// const assert = require('assert');
// // escreva a função wordLengths aqui

// const wordLengths = (arr) => {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     newArr.push(arr[index].length);
//   };
//   return newArr;
// };

// const words = ['sun', 'potato', 'roundabout', 'pizza'];
// const expected = [3, 6, 10, 5];

// assert.strictEqual(typeof wordLengths, 'function');
// const output = wordLengths(words);
// assert.deepStrictEqual(output, expected);

// -------------------------------------------------------------------------------

// Exercício 3

// const assert = require('assert');
// // escreva a função sumAllNumbers aqui

// const sumAllNumbers = (arr) => {
//   let sum = 0;
//   for (let index = 0; index < arr.length; index += 1) {
//     sum += arr[index];
//   }
//   return sum;
// };

// const numbers = [9, 23, 10, 3, 8];
// const expected = 53;
// const output = sumAllNumbers(numbers);

// assert.strictEqual(typeof sumAllNumbers, 'function');
// assert.strictEqual(output, expected);

// -------------------------------------------------------------------------------

// // Exercício 4

// const assert = require('assert');
// // escreva a função findTheNeedle aqui

// const findTheNeedle = (arr, word) => {
//   for (let index = 0; index < arr.length; index += 1) {
//     if (arr[index] === word) return index;
//   }
//   return -1;
// };

// let words = ['house', 'train', 'slide', 'needle', 'book'];
// let expected = 3;
// let output = findTheNeedle(words, 'needle');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = 0;
// output = findTheNeedle(words, 'plant');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = -1;
// output = findTheNeedle(words, 'plat');
// assert.strictEqual(output, expected);

// // console.log(findTheNeedle(words, 'needle'));

// -------------------------------------------------------------------------------

// Parte 3
// Exercício 1

// const assert = require('assert');

// const greetPeople = (people) => {
//   let greeting = [];

//   for (const person in people) {
//     greeting.push(`Hello ${people[person]}`);
//   }
//   return greeting;
// };

// const parameter = ['Irina', 'Ashleigh', 'Elsa'];
// const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

// assert.strictEqual(typeof greetPeople, 'function');
// assert.deepStrictEqual(greetPeople(parameter), result, 'Wrong result');

// -------------------------------------------------------------------------------

// Exercício 2

// const assert = require('assert');

// const removeVowels = (word) => {
//   const characters = word.split('');
  
//   let results = [];
//   let number = 1;

//   for (let index = 0; index < characters.length; index += 1) {
//     if (
//       characters[index] === 'a' ||
//       characters[index] === 'o' ||
//       characters[index] === 'i' ||
//       characters[index] === 'e' ||
//       characters[index] === 'u'
//     ) {
//       results.push(number);
//       number += 1;
//     } else {
//       results.push(characters[index]);
//     }
//   }
  
//   return results.join('');
// };


// const parameter = 'Dayane';
// const result = 'D1y2n3';

// assert.strictEqual(typeof removeVowels, 'function');
// assert.deepStrictEqual(removeVowels(parameter), result, 'Wrong result');

// -------------------------------------------------------------------------------

// Exercício 3

// const assert = require('assert');

// const greaterThanTen = (array) => {
//   let results = [];
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index] > 10) {
//       results.push(array[index]);
//     }
//   }
//   return results;
// };

// const parameter = [4, 10, 32, 9, 21];
// const result = [32, 21];

// assert.strictEqual(typeof greaterThanTen, 'function');
// assert.deepStrictEqual(greaterThanTen(parameter), result, 'Wrong result');

// console.log(greaterThanTen(parameter));

// -------------------------------------------------------------------------------

// Exercício 4

// const assert = require('assert');

// function secondThirdSmallest(array) {
//   let results = [];
//   array.sort(function (x, y) {
//       return x - y;
//   });
//   results = [array[1], array[2]];
//   return results;
// };

// const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
// const result = [5, 6];

// assert.strictEqual(typeof secondThirdSmallest, 'function');
// assert.deepStrictEqual(secondThirdSmallest(parameter), result, 'Wrong result');

// console.log(secondThirdSmallest(parameter));

// -------------------------------------------------------------------------------

// Bonus 1

// const assert = require('assert');

// function getChange(payable, paid) {
//   const coins = [200, 100, 50, 20, 10, 5, 2, 1];
//   let change = [];
//   const { length } = coins;
//   let remaining = paid - payable;

//   // escreva seu código aqui...

//   if (paid < payable) {
//     throw new Error('paid value is not enough');
//   }

//   if (payable === paid) {
//     change = [];
//   }

//   while (remaining >= 200) {
//     change.push(coins[0]);
//     remaining -= 200;
//   }

//   while (remaining >= 100 && remaining < 200) {
//     change.push(coins[1]);
//     remaining -= 100;
//   }

//   while (remaining >= 50 && remaining < 100) {
//     change.push(coins[2]);
//     remaining -= 50;
//   }

//   while (remaining >= 20 && remaining < 50) {
//     change.push(coins[3]);
//     remaining -= 20;
//   }

//   while (remaining >= 10 && remaining < 20) {
//     change.push(coins[4])
//     remaining -= 10;
//   }

//   while (remaining >= 5 && remaining < 10) {
//     change.push(coins[5])
//     remaining -= 5;
//   }

//   while (remaining >= 2 && remaining < 5) {
//     change.push(coins[6])
//     remaining -= 2;
//   }

//   while (remaining === 1) {
//     change.push(coins[7])
//     remaining -= 1;
//   }

//   return change;
// }

// let result = getChange(20, 20); // no change/coins just an empty array
// let expected = [];
// assert.deepStrictEqual(result, expected);

// result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
// expected = [50, 20, 10, 5];
// assert.deepStrictEqual(result, expected);

// result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
// expected = [100, 10, 2, 2];
// assert.deepStrictEqual(result, expected);

// result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
// expected = [200, 100, 50, 20, 10, 5, 2, 1];
// assert.deepStrictEqual(result, expected);

// assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);

// -------------------------------------------------------------------------------

// Bonus 2

// const assert = require('assert');
// // escreva a função factorial aqui

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1

// const in1 = 5;
// const exp1 = 120;

// const in2 = 9;
// const exp2 = 362880;

// const in3 = 1;
// const exp3 = 1;

// const in4 = 0;
// const exp4 = 1;

// const in5 = 3;
// const exp5 = 6;

// const out1 = factorial(in1);
// const out2 = factorial(in2);
// const out3 = factorial(in3);
// const out4 = factorial(in4);
// const out5 = factorial(in5);

// assert.strictEqual(out1, exp1);
// assert.strictEqual(out2, exp2);
// assert.strictEqual(out3, exp3);
// assert.strictEqual(out4, exp4);
// assert.strictEqual(out5, exp5);

// -------------------------------------------------------------------------------

// Bonus 3

// const assert = require('assert');
// // escreva a função removeMiddle aqui

// const removeMiddle = (arr) => {
//   const middleIndex = Math.floor(arr.length / 2);
//   const output = [arr[middleIndex]];
//   words.splice(middleIndex, 1);
//   return output;
// };

// const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
// const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
// const expectedOutput = ['queen'];
// const output = removeMiddle(words);

// assert.deepStrictEqual(output, expectedOutput);
// assert.deepStrictEqual(words, expectedWords);

// -------------------------------------------------------------------------------

// Bonus 4

// const assert = require('assert');

// const getLargestNumber = (array) => {
//   // let largestNumber = array[0];
//   // for (let index = 1; index < array.length; index += 1) {
//   //   if (array[index] > largestNumber) {
//   //     largestNumber = array[index];
//   //   }
//   // }
//   // return largestNumber;

//   // or

//   array.sort(function (a, b) {return b - a});
//   return array[0];
// }

// const parameter = [45, 8, 2, 50, 1, 7, 99];
// const result = 99;

// assert.strictEqual(typeof getLargestNumber, 'function');
// assert.deepStrictEqual(getLargestNumber(parameter), result, 'Wrong result');

// -------------------------------------------------------------------------------
