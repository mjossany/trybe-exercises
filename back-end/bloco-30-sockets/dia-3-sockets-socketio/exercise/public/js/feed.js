const socket = window.io();

const likeIcon = document.getElementById('likeIcon');
const currentLikes = document.getElementById('currentLikes');
const starIcon = document.getElementById('starIcon');
const currentStars = document.getElementById('currentStars');

starIcon.addEventListener('click', (e) => {
  e.preventDefault();
  currentStars.innerText = +currentStars.innerText + 1;
  socket.emit('starPost', currentStars.innerText);
  return false;
});

likeIcon.addEventListener('click', (e) => {
  e.preventDefault(); 
  socket.emit('likePost', currentLikes.innerText);
  return false;
});

const updateLikesNumber = (number) => {
  currentLikes.innerText = number;
  return false;
};

const updateStarsNumber = (number) => {
  currentStars.innerText = number;
  return false;
};

socket.on('updateLikes', (number) => updateLikesNumber(number));
socket.on('updateStars', (number) => updateStarsNumber(number));