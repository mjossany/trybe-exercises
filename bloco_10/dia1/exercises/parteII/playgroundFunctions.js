// Desafio 1
function compareTrue(bool, bool2) {
  let success = true;
  if (bool === true && bool2 === true) {
    success = true;
  } else {
    success = false;
  }
  return success;
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence(str) {
  let finalArray = [];
  let actualWord = '';
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] !== ' ') {
      actualWord += str[index];
    } else {
      finalArray.push(actualWord);
      actualWord = '';
    }
  }
  finalArray.push(actualWord);
  return finalArray;
}

// Desafio 4
function concatName(arrayOfStrings) {
  let finalString = '';
  finalString = `${arrayOfStrings[arrayOfStrings.length - 1]}, ${
    arrayOfStrings[0]
  }`;
  return finalString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victoryPoints = wins * 3;
  let tiePoints = ties * 1;
  let totalPoints = victoryPoints + tiePoints;

  return totalPoints;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let biggestValue = arrayOfNumbers[0];
  let count = 0;
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] === biggestValue) {
      count += 1;
    } else if (arrayOfNumbers[index] > biggestValue) {
      biggestValue = arrayOfNumbers[index];
      count = 0;
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  let catWinner = '';

  if (distanceCat1 < 0) {
    distanceCat1 *= -1;
  }
  if (distanceCat2 < 0) {
    distanceCat2 *= -1;
  }
  if (distanceCat1 < distanceCat2) {
    catWinner = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    catWinner = 'cat2';
  } else {
    catWinner = 'os gatos trombam e o rato foge';
  }
  return catWinner;
}

// Desafio 8
function divisible(n) {
  let result = '';
  if (n % 3 === 0 && n % 5 === 0) {
    result += 'fizzBuzz';
  } else if (n % 3 === 0) {
    result += 'fizz';
  } else if (n % 5 === 0) {
    result += 'buzz';
  } else {
    result += 'bug!';
  }
  return result;
}

function fizzBuzz(numeros) {
  let arr = [];
  for (let n of numeros) {
    arr.push(divisible(n));
  }
  return arr;
}

// Desafio 9
const encoder = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
};

const vowels = 'aeiou';

function encode(str) {
  let returnString = '';

  for (let index = 0; index < str.length; index += 1) {
    if (vowels.includes(str[index])) {
      returnString += encoder[str[index]];
    } else {
      returnString += str[index];
    }
  }

  return returnString;
}

const encoder2 = {
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
};

const numbers = '12345';

function decode(str) {
  let returnString = '';

  for (let index = 0; index < str.length; index += 1) {
    if (numbers.includes(str[index])) {
      returnString += encoder2[str[index]];
    } else {
      returnString += str[index];
    }
  }

  return returnString;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};