//2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function biggestValue(numbers) {
  let biggestIndex = 0;
  for (let index in numbers) {
    if (numbers[index] > numbers[biggestIndex]) {
      biggestIndex = index;
    }
  }
  return biggestIndex;
}
console.log(biggestValue([2, 3, 6, 7, 10, 1]));