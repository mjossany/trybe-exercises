const fetch = require('node-fetch');

const returnDogApi = () => 'https://dog.ceo/api/breeds/image/random';

const fecthDogApi = async () => {
  const response = await fetch(returnDogApi())
  const data = await response.json()
  return data;
}

module.exports = {
  fecthDogApi,
  returnDogApi,
}