let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let higherValue = numbers[1];
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherValue) {
        higherValue = numbers[index];
    }
}
console.log(higherValue)