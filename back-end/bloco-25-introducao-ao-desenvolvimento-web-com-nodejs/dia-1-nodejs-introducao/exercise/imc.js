const readline = require('readline-sync')

const peso = readline.questionFloat('Qual seu peso?');
const altura = readline.questionFloat('Qual sua altura?');
let IMC = 0;
let IMCSituation = '';

const IMCCalculator = () => {
  IMC = Math.round(peso / ( altura ^ 2 ));
  return IMC;
};

IMCCalculator();

const IMCSituationCalculator = (IMC) => {
  if (IMC < 18.5) {
    IMCSituation = 'Abaixo do peso (magreza)';
  } else if (IMC >= 18.5 && IMC <= 24.9) {
    IMCSituation = 'Peso normal';
  } else if (IMC >= 25 && IMC <= 29.9) {
    IMCSituation = 'Acima do peso (sobrepeso)';
  } else if (IMC >= 30 && IMC <= 34.9) {
    IMCSituation = 'Obesidade grau I';
  } else if (IMC >= 35 && IMC <= 39.9) {
    IMCSituation = 'Obesidade grau II';
  } else {
    IMCSituation = 'Obesidade graus III e IV'
  }
}

IMCSituationCalculator(IMC);

console.log(`Seu IMC é ${IMC}. Sua situação atual é de: ${IMCSituation}`);