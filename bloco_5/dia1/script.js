

document.getElementById('header-container').style.backgroundColor = 'rgb(0, 176, 105)';
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'salmon';
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'rgb(249, 219, 94)';
let h3s = document.getElementsByTagName('h3');
for (let index = 0; index < h3s.length; index += 1) {
  h3s[index].style.backgroundColor = 'black';
}
document.getElementById('footer-container').style.backgroundColor = 'rgb(0, 53, 51)';