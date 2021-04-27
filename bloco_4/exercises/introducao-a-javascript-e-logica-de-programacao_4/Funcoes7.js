//7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function wordEnding(word, ending) {

  let endingCount = ending.length;
  let endingLetters = '';

  for (let index = word.length - ending.length; index < word.length; index += 1) {
    endingLetters += (word[index]);
  }
  if (endingLetters === ending) {
    return true;
  } else {
    return false;
  };
};
console.log(wordEnding('arvore', 're'));