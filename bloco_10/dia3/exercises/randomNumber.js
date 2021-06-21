const generateRandomNumber = () => {
return Math.floor((Math.random() * 101));
}

const stringUpper = (string) => string.toUpperCase();

const stringFirst = (string) => string[0];

const concStrings = (str1, str2) => `${str1}${str2}`;

module.exports = {
  generateRandomNumber,
  stringUpper,
  stringFirst,
  concStrings,
}

