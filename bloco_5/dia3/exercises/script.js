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
    monthDaysList.appendChild(dayListItem);
  }
}
calendarDays();

//Exercício 2

function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
}

createHolidayButton('Feriadou');

//Exercício 3
function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
}
displayHolidays();
//Exercício 4
function createFridayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
}
createFridayButton('Frideiou');

//Exercício 5
function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'FRIDOU o/';
  
  getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
      } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
}
let dezFridays = [4, 11, 18, 25];
displayFridays(dezFridays);

//Exercício 6
function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
}

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
}
dayMouseOver();
dayMouseOut();
//Exercício 7

function newTaskSpan(task) {
  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
}

newTaskSpan('Cozinhar');

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

//Exercício Bônus
function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  })
}
addNewTask();
