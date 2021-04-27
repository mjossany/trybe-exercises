//3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function smallestValue(numbers) {
  let smallestIndex = 0;
  for (let index in numbers) {
    if (numbers[index] < numbers[smallestIndex]) {
      smallestIndex = index;
    };
  };
  return smallestIndex;
};
console.log(smallestValue([2, 4, 6, 7, 10, 0, -3]));
