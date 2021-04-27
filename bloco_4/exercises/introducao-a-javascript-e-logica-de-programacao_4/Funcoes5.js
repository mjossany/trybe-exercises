//5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repeat(numbers) {
  
  let actualNumber;
  let countActualNumber = 0;
  let countPastNumber = 0;
  let mostRepeat = 0;

  for (let index in numbers) {
    actualNumber = numbers[index];
    for (let index2 in numbers) {
      if (numbers[index2] === actualNumber) {
        countActualNumber += 1;
      };
    };
    if (countActualNumber > countPastNumber) {
      mostRepeat = numbers[index];
      countPastNumber = countActualNumber;
    };
    countActualNumber = 0;
  };
  return mostRepeat;
};

console.log(repeat([2, 3, 2, 5, 8, 2, 3, 3, 3, 3]));