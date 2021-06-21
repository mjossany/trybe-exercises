// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

const hof = (arrGabarito, arrRespostas, callback) => {
  console.log(callback(arrGabarito, arrRespostas));
};

const checkCount = (arrGabarito, arrRespostas) => {
  let contagem = 0;
  for (let index = 0; index < arrGabarito.length; index += 1) {
    if (arrGabarito[index] === arrRespostas[index]) {
      contagem += 1;
    } else if (arrRespostas[index] === 'N.A') {
      contagem += 0;
    } else {
      contagem -= 0.5;
    }
  }
  return contagem;
};

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

hof(rightAnswers, studentAnswers, checkCount);
