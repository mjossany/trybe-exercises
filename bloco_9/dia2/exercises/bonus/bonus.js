const sumRandomNumbers = () => {
    const arrayNumbers = [];
    for (let index = 0; index < 10; index += 1) {
      const randomNumber = Math.floor(Math.random() * 50) + 1;
      arrayNumbers.push(Math.pow(randomNumber, 2));
    }
    const sumArrayNumbers = arrayNumbers.reduce((acc, number) => acc + number);

    if (sumArrayNumbers >= 8000) throw new Error("É mais de oito mil! Essa promise deve estar quebrada!");
    return sumArrayNumbers;
}

const final = (sum) => [2, 3, 5, 10].map((divisor) => sum / divisor)
  .reduce((acc, number) => acc + number);

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const sumFromSum = await final(sum);
    return console.log(sumFromSum);
  } catch(error) {
    return console.log(error.message);
  }
}

fetchPromise();