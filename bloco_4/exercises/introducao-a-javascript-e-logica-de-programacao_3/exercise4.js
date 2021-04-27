//4- Depois, faça uma pirâmide com n asteriscos de base:

// let base = 5;

// for (let lines = 0; lines < base; lines += 2) {
//     let asterisksLine = '';
//     for (blanks = 0; blanks < base - lines - 2; blanks += 2) {
//         asterisksLine += ' ';
//     }
//     for (asterisks = 0; asterisks <= lines; asterisks += 1) {
//         asterisksLine += '*';
//     }
//     for (blanks = 0; blanks < base - lines - 2; blanks += 2) {
//         asterisksLine += ' ';
//     }
//     console.log (asterisksLine)
// }

// or 

let n = 7;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex < midOfMatrix; lineIndex += 1) {
    for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
        if (columnIndex >= controlLeft && columnIndex <= controlRight || columnIndex === midOfMatrix) {
            inputLine += symbol;
        } else {
            inputLine += ' ';
        };
    };
    console.log(inputLine);
    inputLine = '';
    controlRight += 1;
    controlLeft -= 1;
};

