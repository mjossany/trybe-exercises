let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

//First I have to find de highest value of the array and than encounter the smallest

let higherValue = numbers[1];
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherValue) {
        higherValue = numbers[index];
    }
}

let smallestValue = higherValue;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < smallestValue) {
        smallestValue = numbers[index];
    }
}
console.log(smallestValue);