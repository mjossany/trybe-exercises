//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let array = [];
for (let index = 1; index <= 25; index += 1) {
    array.push(index);
}

for (let index = 0; index < 25; index += 1) {
    console.log(array[index] / 2);
}