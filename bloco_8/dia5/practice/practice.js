// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['Banana', 'Morango', 'Mamão'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['Granola', 'Aveia', 'Mel'];

// const fruitSalad = (fruit, additional) => {
//   // Esreva sua função aqui
//   return [...specialFruit, ...additionalItens];
// };

// console.log(fruitSalad(specialFruit, additionalItens));
// -------------------------------------------------------------------------------------------------------
// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// // saudacoes[1](saudacoes[0]); // Olá

// // Produza o mesmo resultado acima, porém utilizando array destructuring
// const [saudacao1, saudacao2] = saudacoes;
// saudacao2(saudacao1);
// -------------------------------------------------------------------------------------------------------
// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
// [comida, animal, bebida] = [bebida, comida, animal];

// console.log(comida, animal, bebida);
// -------------------------------------------------------------------------------------------------------
// let numerosPares = [1, 3, 5, 6, 8, 10, 12];


// // Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
// [,,,...numerosPares] = numerosPares;

// console.log(numerosPares); // [6, 8, 10, 12];
// -------------------------------------------------------------------------------------------------------
// const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));
// -------------------------------------------------------------------------------------------------------
// const getPosition = (latitude, longitude) => ({
//   latitude,
//   longitude,
// });

// console.log(getPosition(-19.8157, -43.9542));
// -------------------------------------------------------------------------------------------------------
const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value;
};

console.log(multiply(8, 2));