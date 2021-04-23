let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//2. Ordene o array numbers em ordem decrescente e imprima seus valores;
for (let firstIndex = numbers.length - 2; firstIndex >= 0; firstIndex -= 1) {
    for (let secondIndex = numbers.length - 1; secondIndex > firstIndex; secondIndex -= 1) {
        if (numbers[secondIndex] > numbers [firstIndex]) {
            let position = numbers[firstIndex];
            numbers[firstIndex] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}
console.log(numbers);