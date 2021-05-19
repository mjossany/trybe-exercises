// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !'`;
//     console.log(ifScope);
//   } else {
//     const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(true);

let oddsAndEvens = [13, 3, 4, 10, 7, 2];
// Seu código aqui.
const ordemCrescente = (arrayOfNumbers) => {
  for (let index = 1; index < arrayOfNumbers.length; index += 1) {
    for (let indexII = 0; indexII < index; indexII += 1) {
      if (arrayOfNumbers[index] < arrayOfNumbers[indexII]) {
        let save = arrayOfNumbers[indexII];
        arrayOfNumbers[indexII] = arrayOfNumbers[index];
        arrayOfNumbers[index] = save;
      }
    }
  }
  console.log(`Os números ${arrayOfNumbers} se encontram ordenados de forma crescente!`);
}
ordemCrescente(oddsAndEvens);