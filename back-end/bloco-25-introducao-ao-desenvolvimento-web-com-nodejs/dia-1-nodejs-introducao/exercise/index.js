const readline = require('readline-sync');

const scripts = ['velocidade', 'sorteio', 'imc'];

const scriptChosen = readline.keyInSelect(scripts, 'Which script?');

require(`./${scripts[scriptChosen]}.js`);

// const scriptExecutor = (scrpt) => {
//   if (scrpt === 'velocidade') {
//     require(`./${scrpt}.js`);
//   }
// }

// scriptExecutor(scriptChosen);