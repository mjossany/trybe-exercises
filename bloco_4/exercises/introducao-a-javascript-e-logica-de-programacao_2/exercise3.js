let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numberOfItens = numbers.length;
let totalSumNumbers = 0;
for (let index = 0; index < numbers.length; index += 1) {
    totalSumNumbers += numbers[index];
}
let arithmeticAverage = totalSumNumbers / numberOfItens;
console.log(arithmeticAverage);