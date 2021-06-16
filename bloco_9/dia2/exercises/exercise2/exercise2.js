const fetchPromise = () => {
  return new Promise((resolve, reject) => {
    const arrayNumbers = [];
    for (let index = 0; index < 10; index += 1) {
      const randomNumber = Math.floor(Math.random() * 50) + 1;
      arrayNumbers.push(Math.pow(randomNumber, 2));
    }
    const sumArrayNumbers = arrayNumbers.reduce((acc, number) => acc + number);

    if (sumArrayNumbers < 8000) {
      resolve(sumArrayNumbers);
    }
    reject("É mais de oito mil! Essa promise deve estar quebrada!");
  })
}

fetchPromise()
  .then((response) => [2, 3, 5, 10].map((divisor) => response / divisor))
  .then((array) => console.log(array.reduce((acc, number) => acc + number)))
  .catch((response) => console.log(response));