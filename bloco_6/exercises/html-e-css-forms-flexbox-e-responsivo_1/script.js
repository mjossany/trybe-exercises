function preencheSelect() {
  const catchSelect = document.getElementById('state');
  const siglasArray = ["ac", "al", "am", "ap", "ba", "ce", "df", "es", "go", "ma", "mt", "ms", "mg", "pa", "pb", "pr", "pe", "pi", "rj", "rn", "ro", "rs", "rr", "sc", "se", "sp", "to"];
  const estadosArray = ["Acre", "Alagoas", "Amazonas", "Amapá", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rondônia", "Rio Grande do Sul", "Roraima", "Santa Catarina", "Sergipe", "São Paulo", "Tocantins"];

  for (let index = 0; index < estadosArray.length; index += 1) {
    const newOption = document.createElement('option');
    newOption.value = siglasArray[index];
    newOption.innerHTML = estadosArray[index];

    catchSelect.appendChild(newOption);
  }
}
preencheSelect();

function dateValidation() {
  const catchDataInput = document.getElementById('input-datainicio');
  if(catchDataInput.value.length === 0) {
    alert('A data não foi preenchida!');
    return false;
  }

  let regex = /\d\d\/\d\d\/\d\d\d\d/;

  if(!regex.test(catchDataInput.value)) {
    alert('A data deve conter o formato dd/mm/aaaa');
    return false;
  }

  let splitted = catchDataInput.value.split('/');
  let day = splitted[0];
  let month = splitted[1];
  let year = splitted[3];

  if(day < 0 || day > 30) {
    alert('Dia inválido');
    return false;
  }

  if(month < 1 || month > 12) {
    alert('Mês inválido');
    return false;
  }

  if(year < 0) {
    alert('Ano inválido');
    return false;
  }
  return true;
}

function nameValidation() {
  const catchNameInput = document.getElementById('name');
  if(catchNameInput.value.length === 0) {
    alert('O nome não foi preenchido');
    return false;
  }
  if(catchNameInput.value.length > 40) {
    alert('Preenchimento do campo Nome não pode ultrapassar 40 caracteres');
    return false;
  }
  return true;
}

function emailValidation() {
  const catchEmailInput = document.getElementById('email');
  if(catchEmailInput.value.length === 0) {
    alert('O email não foi preenchido');
    return false;
  }
  if(catchEmailInput.value.length > 50) {
    alert('Preenchimento do campo Email não pode ultrapassar 50 caracteres');
    return false;
  }
  return true;
}

function cpfValidation() {
  const catchCpfInput = document.getElementById('cpf-number');
  if(catchCpfInput.value.length === 0) {
    alert('O cpf não foi preenchido');
    return false;
  }
  if(catchCpfInput.value.length > 11) {
    alert('Preenchimento do campo CPF não pode ultrapassar 11 caracteres');
    return false;
  }
  return true;
}

function enderecoValidation() {
  const catchEnderecoInput = document.getElementById('address');
  if(catchEnderecoInput.value.length === 0) {
    alert('O endereço não foi preenchido');
    return false;
  }
  if(catchEnderecoInput.value.length > 200) {
    alert('Preenchimento do campo Endereço não pode ultrapassar 200 caracteres');
    return false;
  }
  return true;
}

function cidadeValidation() {
  const catchCidadeInput = document.getElementById('city');
  if(catchCidadeInput.value.length === 0) {
    alert('O campo Cidade não foi preenchido');
    return false;
  }
  if(catchCidadeInput.value.length > 200) {
    alert('Preenchimento do campo Cidade não pode ultrapassar 200 caracteres');
    return false;
  }
  return true;
}

function estadoValidation() {
  const catchEstadoInput = document.getElementById('state');
  if(catchEstadoInput.value.length === 0) {
    alert('O campo Estado não foi preenchido. Selecione um dos estados da lista.');
    return false;
  }
}

function curriculoValidation() {
  const catchCurriculoInput = document.getElementById('resume');
  if(catchCurriculoInput.value.length === 0) {
    alert('O campo Currículo não foi preenchido');
    return false;
  }
  if(catchCurriculoInput.value.length > 1000) {
    alert('Preenchimento do campo Resumo do currículo não pode ultrapassar 1000 caracteres');
    return false;
  }
  return true;
}

function cargoValidation() {
  const catchCargoInput = document.getElementById('role');
  if(catchCargoInput.value.length === 0) {
    alert('O campo Cargo não foi preenchido');
    return false;
  }
  if(catchCargoInput.value.length > 40) {
    alert('Preenchimento do campo Cargo não pode ultrapassar 40 caracteres');
    return false;
  }
  return true;
}

function catchDescricaoValidation() {
  const catchDescricaoInput = document.getElementById('roleDescription');
  if(catchDescricaoInput.value.length === 0) {
    alert('O campo Descrição do cargo não foi preenchido');
    return false;
  }
  if(catchCargoInput.value.length > 500) {
    alert('Preenchimento do campo Descrição do cargo não pode ultrapassar 500 caracteres');
    return false;
  }
  return true;
}

const catchSubmitButton = document.getElementById('submit');
catchSubmitButton.addEventListener('click', validateAll);

function validateAll(event) {
  event.preventDefault();

  nameValidation();
  emailValidation();
  cpfValidation();
  enderecoValidation();
  cidadeValidation();
  estadoValidation();
  dateValidation();
  curriculoValidation();
  cargoValidation();
  catchDescricaoValidation();
}