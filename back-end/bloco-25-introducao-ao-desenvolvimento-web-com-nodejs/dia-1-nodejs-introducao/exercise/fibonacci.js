const readline = require('readline-sync');

const number = readline.questionInt('Quantos números da sequência de fibonacci você quer ver? ');

const fiboSequence = (n) => {
  if (n > 0) {
    let sequence = [0, 1];
    for (let i = sequence.length; sequence.length <= n; i) {
      let newNumber = sequence[sequence.length - 1] + sequence[sequence.length -2]
      sequence.push(newNumber);
    }
    sequence.shift();
    return sequence;
  } else {
    return "Insira um valor maior que 0."
  }
}

console.log(fiboSequence(number));