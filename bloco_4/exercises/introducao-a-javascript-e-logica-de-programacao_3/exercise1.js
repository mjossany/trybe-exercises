//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 10;

for (let lines = 0; lines < n; lines += 1) {
    let asteriskLine = '';
    for (let columns = 0; columns < n; columns += 1) {
        asteriskLine += '*';
    };
    console.log(asteriskLine);
};
