//3. Agora inverta o lado do triângulo.Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

// let heigth = 5;

// for (let line = 0; line < heigth; line += 1) {
//     let asteriskLine = '';
//     for (let blanks = 1; blanks < heigth - line; blanks += 1) {
//         asteriskLine += ' ';
//     };
//     for (let asterisks = 0; asterisks <= line; asterisks += 1) {
//         asteriskLine += '*';
//     };
//     console.log(asteriskLine);
// };

// or

let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine += ' ';
    } else {
      inputLine += symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
}