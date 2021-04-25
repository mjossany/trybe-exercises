let megaSenaNumbers = [];

let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

let turma12Play = [35, 8, 22, 14, 2, 60];
let turma12Play2 = [5, 27, 82, 99, 17, 13];
let turma12Play3 = [1, 11, 21, 31, 41, 51];

let megaSenaGames = [turma12Play, turma12Play2, turma12Play3];

for (let games = 0; games < megaSenaGames.length; games += 1) {
    let numberOfHits = 0;
    for (let indexMegaNumbers = 0; indexMegaNumbers < megaSenaNumbers.length; indexMegaNumbers += 1) {
        for (let indexPlay = 0; indexPlay < megaSenaGames[games].length; indexPlay += 1) {
            if (megaSenaGames[games][indexPlay] == megaSenaNumbers[indexMegaNumbers]) {
                numberOfHits += 1;
            };
        };
    };
    console.log(`Game: ${games + 1}`);
    console.log(`Sort Numbers: ${megaSenaNumbers}`);
    console.log(`Numbers played: ${megaSenaGames[games]}`)
    console.log(`Number of hits: ${numberOfHits}`);
    console.log('-----------------------------------------')
};