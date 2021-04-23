//8. Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado

let array = [];
for (let index = 1; index <= 25; index += 1) {
    array.push(index);
}
console.log(array);

//or

let array = [];
for (let index = 0; index < 25; index += 1) {
    array.push(index + 1);
}
console.log(array);