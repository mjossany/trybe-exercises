const readline = require('readline-sync');

const scripts = ['velocidade', 'sorteio', 'imc', 'fatorial', 'fibonacci'];

const scriptChosen = readline.keyInSelect(scripts, 'Which script?');

require(`./${scripts[scriptChosen]}.js`);