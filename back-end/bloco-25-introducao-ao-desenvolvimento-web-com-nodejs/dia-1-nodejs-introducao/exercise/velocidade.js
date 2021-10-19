const readline = require('readline-sync');

const distancia = readline.questionInt('Insira uma distância: ');
const tempo = readline.questionInt('Insira o tempo para percorrer a distância: ');

let avgSpeed = 0;

const calculateAvgSpeed = () => {
  avgSpeed = Math.round( distancia / tempo );
};

calculateAvgSpeed();

console.log(`A velocidade média no trecho foi de ${avgSpeed}m/s.`);