const factorial = number => {
  let numberFactorial = 1;
  if (number > 0) {
    for (let index = 2; index <= number; index += 1) {
      numberFactorial *= index;
    }
  }
  console.log(numberFactorial)
}
factorial(6);