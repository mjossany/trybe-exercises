//1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados.

//Variables
let a = 20;
let b = 10;

//First program
let addition = a + b;
console.log(addition);
//Second program

let subtraction = a - b;
console.log(subtraction);
//Third program

let multiplication = a * b;
console.log(multiplication);

//Fourth program
let division = a / b;
console.log(division);

//Fifth program
let modulo = a % b;
console.log(modulo);

//2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

//Variables
let c = 11;
let d = 12;

//Program
if (c > d) {
  console.log(c);
} else {
  console.log(d);
}

//3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
let e = 100;
let f = 101;
let g = 102;

//Program
if (e > f && e > g) {
  console.log(e);
} else if (f > e && f > g) {
  console.log(f);
} else {
  console.log(g);
}

//4. Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
let h = 0;

//Program
if (h > 0) {
  console.log("positive");
} else if (h < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

//5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
let i = 60;
let j = 60;
let k = 60;

//Program
if (i < 0 || j < 0 || k < 0) {
  console.log("Erro");
} else if (i + j + k <= 180) {
  console.log(true);
} else {
  console.log(false);
}

//6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case). Se a peça passada for inválida, o programa deve retornar uma mensagem de erro. Exemplo: bishop (bispo) -> diagonals (diagonais).
let chessPiece = 'ROOK';
let chessPieceLowerCase = chessPiece.toLowerCase();

//Program
switch (chessPieceLowerCase) {
    case 'king':
        console.log('horizontally, vertically or diagonally');
        break;

    case 'queen':
        console.log('horizontally, vertically ou diagonally');
        break;
    case 'rook':
        console.log('horizontally ou vertically');
        break;
    case 'bishops':
        console.log('diagonally');
        break;
    case 'knights':
        console.log('two squares vertically and one square horizontally or two squares horizontally and one square vertically');
    case 'pawns':
        console.log('vertically')
        break;
    default:
        console.log('Valor não identificado');
}

//7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras: Porcentagem >= 90 -> A Porcentagem >= 80 -> B Porcentagem >= 70 -> C Porcentagem >= 60 -> D Porcentagem >= 50 -> E Porcentagem < 50 -> F
let grade = 1;

//Program
if (grade >= 90) { 
    console.log('A');
}
else if (grade >= 80) {
    console.log('B');
}
else if (grade >= 70) {
    console.log('C');
}
else if (grade >= 60) {
    console.log('D');
}
else if (grade >= 50) {
    console.log('E');
}
else {
    console.log('F');
}

//8. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
let l = 1;
let m = 2;
let n = 3;

//Program
if ((l % 2 == 0) || (m % 2 == 0) || (n % 2 == 0)) {
    console.log(true);
}
else {
    console.log(false);
}