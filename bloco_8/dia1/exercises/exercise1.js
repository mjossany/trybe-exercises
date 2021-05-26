// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
const newPerson = (string) => {
  let nameEmail = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ' ') {
      nameEmail += '_';
    } else {
      nameEmail += string[index].toLowerCase();
    }
  }
  const email = `${nameEmail}@trybe.com`;

  return {
  nomeCompleto: string,
  email: email,
  }
}

const newEmployees = () => {
  const employees = {
    id1: newPerson('Pedro Guerra').nomeCompleto, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newPerson('Luiza Drumond').nomeCompleto, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newPerson('Carla paiva').nomeCompleto, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());