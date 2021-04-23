let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1. Ordene o array numbers em ordem crescente e imprima seus valores;
for (let secondIndex = 1; secondIndex < numbers.length; secondIndex += 1) {
    for (let firstIndex = 0; firstIndex < secondIndex; firstIndex += 1) {
        if (numbers[secondIndex] < numbers[firstIndex]) {
            let position = numbers[secondIndex];
            numbers[secondIndex] = numbers[firstIndex];
            numbers[firstIndex] = position;
        }
    }
}
console.log(numbers);