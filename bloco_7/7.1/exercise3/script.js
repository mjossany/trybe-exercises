const catchButton = document.getElementById('button');
const catchP = document.getElementById('clicks');
let clickCount = 0;

catchButton.addEventListener('click', event => {
  clickCount += 1;
  catchP.innerText = clickCount;
})