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

const assert = require('assert');

function secondThirdSmallest(array) {
  let results = [];
  array.sort(function (x, y) {
      return x - y;
  });
  results = [array[1], array[2]];
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.strictEqual(typeof secondThirdSmallest, 'function');
assert.deepStrictEqual(secondThirdSmallest(parameter), result, 'Wrong result');

// console.log(secondThirdSmallest(parameter));

// -------------------------------------------------------------------------------