//6. Faça um programa que diz se um número definido numa variável é primo ou não.

let isThisNumberPrime = 5;

let divisors = 0;
for (let index = 2; index <= isThisNumberPrime; index += 1) {
  if (isThisNumberPrime % index === 0) {
      divisors += 1;
  }
}
if (divisors > 1) {
    console.log(`${isThisNumberPrime} não é primo`);
} else {
    console.log(`${isThisNumberPrime} é primo`);
}