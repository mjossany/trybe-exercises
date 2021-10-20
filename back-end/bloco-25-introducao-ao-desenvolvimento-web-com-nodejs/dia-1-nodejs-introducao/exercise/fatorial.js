const readline = require('readline-sync');

const number = readline.questionInt('Insira o número a ser feito o fatorial: ');

let answer = 1;

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return answer;
  } else {
    answer = n * factorial(n - 1);
    return answer;
  }
}

factorial(number);

console.log(`O fatorial de ${number} é ${answer}.`)