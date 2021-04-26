//3. Agora inverta o lado do triângulo.Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

let heigth = 5;

for (let line = 0; line < heigth; line += 1) {
    let asteriskLine = '';
    for (let blanks = 1; blanks < heigth - line; blanks += 1) {
        asteriskLine += ' ';
    };
    for (let asterisks = 0; asterisks <= line; asterisks += 1) {
        asteriskLine += '*';
    };
    console.log(asteriskLine);
};