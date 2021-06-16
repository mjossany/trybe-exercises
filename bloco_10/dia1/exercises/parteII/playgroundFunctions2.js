// Desafio 10
function techList(arr, name) {
  if (arr.length === 0) return 'Vazio!'
  const lista = arr.sort()
  .map((tech) => ({ tech, name }));

  return lista;
}

// // Desafio 11
// function check09(arr) {
//   for (let index = 0; index <= arr.length; index += 1) {
//     if (arr[index] < 0 || arr[index] > 9) {
//       return true;
//     }
//   }
//   return false;
// }
// function unprecedentedArray(arr) {
//   let newArray = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (!newArray.includes(arr[index])) {
//       newArray.push(arr[index]);
//     }
//   }
//   return newArray;
// }
// function checkCount(arr, number) {
//   let count = 0;
//   for (let index = 0; index < arr.length; index += 1) {
//     if (arr[index] === number) {
//       count += 1;
//     }
//   }
//   return count >= 3;
// }
// function generatePhoneNumber(arr) {
//   if (arr.length !== 11) {
//     return 'Array com tamanho incorreto.';
//   }
//   if (check09(arr)) {
//     return 'não é possível gerar um número de telefone com esses valores';
//   }
//   let cleanArray = unprecedentedArray(arr);
//   for (let index = 0; index < cleanArray.length; index += 1) {
//     if (checkCount(arr, cleanArray[index])) {
//       return 'não é possível gerar um número de telefone com esses valores';
//     }
//   }
//   let prefix = `(${arr[0]}${arr[1]}) `;
//   let firstFive = `${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-`;
//   let lastFour = `${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
//   return prefix + firstFive + lastFour;
// }

// // Desafio 12
// function check1(lineA, lineB, lineC) {
//   return lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineB + lineA;
// }

// function check2(lineA, lineB, lineC) {
//   return lineA > Math.abs(lineB - lineC)
//       && lineB > Math.abs(lineA - lineC)
//       && lineC > Math.abs(lineA - lineB);
// }

// function triangleCheck(lineA, lineB, lineC) {
//   return check1(lineA, lineB, lineC) && check2(lineA, lineB, lineC);
// }
// console.log(triangleCheck(10, 14, 8));

// // Desafio 13
// function hydrate(str) {
//   let glassesOfWater = 0;
//   let reg = /\d+/g;
//   let result = str.match(reg);
//   for (let index = 0; index < result.length; index += 1) {
//     glassesOfWater += parseInt(result[index], 10);
//   }
//   if (glassesOfWater > 1) {
//     return `${glassesOfWater} copos de água`;
//   }
//   return `${glassesOfWater} copo de água`;
// }

module.exports = {
  // generatePhoneNumber,
  techList,
  // hydrate,
  // triangleCheck,
};