function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function calendarDays () {
  
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  const monthDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const days = dezDaysList[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    dayListItem.classList.add('day');
    if (days === 24 || days === 25 || days === 31) {
      dayListItem.classList.add('holiday');
    }
    if (days === 4 || days === 11 || days === 18 || days === 25) {
      dayListItem.classList.add('friday');
    }
    console.log(dayListItem);
    monthDaysList.appendChild(dayListItem);
  }
}
calendarDays();

//Exercício 2

function buttonHoliday(string) {
  const father = document.querySelector('.buttons-container');
  const btnHoliday = document.createElement('button');
  btnHoliday.id = 'btn-holiday';
  btnHoliday.innerHTML = 'Feriados';
  father.appendChild(btnHoliday);
}
buttonHoliday();

//Exercício 3
const btnFeriados = document.querySelector('#btn-holiday');
const newColor = 'white';
const backgroundColor = "rgb(238,238,238)";
btnFeriados.addEventListener('click', function () {
  const holidayDays = document.getElementsByClassName('holiday');
  for (let index = 0; index < holidayDays.length; index += 1) {
    if (holidayDays[index].style.backgroundColor === newColor) {
      holidayDays[index].style.backgroundColor = backgroundColor;
    } else {
      holidayDays[index].style.backgroundColor = newColor;
    }
  }
});

//Exercício 4

function buttonFriday(string) {
  const father = document.querySelector('.buttons-container');
  const btnFriday = document.createElement('button');
  btnFriday.id = 'btn-friday';
  btnFriday.innerHTML = 'Sexta-feira';

  father.appendChild(btnFriday);
};
buttonFriday();

//Exercício 5

const btnSexta = document.querySelector('#btn-friday');
const msg = 'SEXTOUU!!';
let fridayD = [4, 11, 18, 25];
btnSexta.addEventListener ('click', function () {
  const fridayDays = document.getElementsByClassName('friday');
  for (let index = 0; index < fridayDays.length; index += 1) {
    if (fridayDays[index].innerHTML !== msg) {
      fridayDays[index].innerHTML = msg;
    } else {
      fridayDays[index].innerHTML = fridayD[index];
    }
  }
});

//Exercício 6

const monthDays = document.getElementsByClassName('day');
for (let index = 0; index < monthDays.length; index += 1) {
  monthDays[index].addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '25px';
  });
  monthDays[index].addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
  });
};

//Exercício 7

function newAssignment(string) {
  const father = document.querySelector('.my-tasks');
  const assignment = document.createElement('span');
  assignment.innerHTML = string;

  father.appendChild(assignment);
};

newAssignment('cozinhar');

//Exercício 8

function subtitle(color) {
  const father = document.querySelector('.my-tasks');
  const subtitle = document.createElement('div');
  subtitle.style.backgroundColor = color;
  subtitle.classList.add('task');

  father.appendChild(subtitle);
}

subtitle('green');

//Exercício 9
const taskDiv = document.querySelectorAll('.task');
for (let index = 0; index < taskDiv.length; index += 1) {
  taskDiv[index].addEventListener('click', function () {
    if (taskDiv[index].className === 'task selected') {
      taskDiv[index].className = 'task';
    } else {
      taskDiv[index].className = 'task selected';
    }
  })
}

//Exercício 10
const addEvent = document.querySelectorAll('.day');
for (let index = 0; index < addEvent.length; index += 1) {
  addEvent[index].addEventListener('click', function () {
    if (addEvent[index].style.color !== 'green') {
      addEvent[index].style.color = 'green';
    } else {
      addEvent[index].style.color = 'rgb(119,119,119)';
    }
  })
};
