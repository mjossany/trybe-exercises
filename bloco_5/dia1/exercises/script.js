document.getElementsByTagName('p')[1].innerText = 'Daqui a 2 anos me vejo como um programador em evolução dentro de uma empresa de tecnologia';
document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScript';
let p = document.getElementsByTagName('p');
for (let index = 0; index < p.length; index += 1) {
  p[index].innerText.toUpperCase();
  console.log(p[index]);
}
