const readline = require('readline-sync');

let randomNumber = 0;

const numberCalculator = () => {
  randomNumber = Math.floor(Math.random() * 11);
  return randomNumber;
};

numberCalculator();

const numberGuessed = readline.questionInt('Adivinhe o número que eu estou pensando entre 0 e 10: ', {limit: '$<0-10>',
limitMessage: 'Insira um número entre 0 e 10'});

let response = numberGuessed === randomNumber ? 'Parabéns, número correto!' : `Opa, não foi dessa vez. O número era ${randomNumber}.`;

console.log(response);