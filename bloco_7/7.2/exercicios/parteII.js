const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// // Exercício 1
// const addTurnoManha = (obj, key, value) => {
//   obj[key] = value;
// }
// addTurnoManha(lesson2, 'turno', 'manhã');

// console.log(lesson2);

// // Exercício 2
// const listObjectKeys = (obj) => Object.keys(obj);
// console.log(listObjectKeys(lesson1));

// // Exercício 3
// const lengthObject = (obj) => Object.keys(obj).length;
// console.log(lengthObject(lesson1));

// // Exercício 4
// const objectValues = obj => Object.values(obj);
// console.log(objectValues(lesson1));

// // Exercício 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// // //Exercício 6
// const numberOfStudents = (obj) => {
//   let count = 0;
//   const array = Object.keys(obj);
//   for (index in array) {
//     count += obj[array[index]].numeroEstudantes;
//   }
//   return count;
// };

// console.log(numberOfStudents(allLessons));

// // Exercício 7
// const keyValue = (obj, position) => Object.values(obj)[position];
// console.log(keyValue(lesson1, 0));

// //Exercício 8
// const pairExist = (obj, k, keyValue) => {
//   const arr = Object.entries(obj);
//   let isEqual = false;
//   for (let index in arr) {
//     if (arr[index][0] === k && arr[index][1] === keyValue) {
//       isEqual = true;
//     }
//   }
//   return isEqual;
// };
// console.log(pairExist(lesson2,'professor','Carlos'));

// // Bônus 1
// const numberOfStudents = (obj) => {
//   let count = 0;
//   const array = Object.keys(obj);
//   for (index in array) {
//     if (obj[array[index]].materia === 'Matemática') {
//       count += obj[array[index]].numeroEstudantes
//     }
//   }
//   return count;
// };
// console.log(numberOfStudents(allLessons));

// // Bônus 2

const createReport = (obj, teacher) => {
  const relatório = {
    professor: teacher,
    aulas: [],
    estudantes: 0,
  }
    let count = 0;
    let classes = [];
    const array = Object.keys(obj);
    for (index in array) {
      if (obj[array[index]].professor === teacher) {
        count += obj[array[index]].numeroEstudantes
        classes.push(obj[array[index]].materia);
      }
    }
    relatório.aulas = classes;
    relatório.estudantes = count;

    console.log(relatório);
  };
  createReport(allLessons, 'Maria Clara');
