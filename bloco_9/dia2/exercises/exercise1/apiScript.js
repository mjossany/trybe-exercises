const API_URL = 'https://icanhazdadjoke.com/';

const appendJoke = (joke) => {
  const jokeContainer = document.getElementById('jokeContainer');
  jokeContainer.innerHTML = joke;
}

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myObject)
  .then((response) => response.json())
  .then((data) => appendJoke(data.joke));
};

window.onload = () => fetchJoke();