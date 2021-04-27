//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let n = 5

for (let lines = 0; lines < n; lines += 1) {   
    let asteriskLine = '';
    for (let columns = 0; columns <= lines; columns += 1) {
        asteriskLine += '*'
    }
    console.log(asteriskLine);
}

or

let size = 5;
let symbol = '*';
let inputline = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  console.log(inputline);
  inputline += symbol;
};