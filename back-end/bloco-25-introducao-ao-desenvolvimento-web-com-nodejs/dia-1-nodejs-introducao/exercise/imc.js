const readline = require('readline-sync')

const peso = readline.questionFloat('Qual seu peso?');
const altura = readline.questionFloat('Qual sua altura?');

const IMC = () => peso / ( altura ^ 2 );

console.log(`Seu IMC é ${Math.round(IMC())}.`);