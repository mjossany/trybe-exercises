// let erro = false;

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

var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'DD/MM/YYYY'
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

// const catchDataInput = document.getElementById('input-datainicio');
// function dateValidation() {
//   if(catchDataInput.value.length === 0) {
//     erro = true;
//     catchDivFinal.innerHTML = 'A data não foi preenchida!';
//     return false;
//   }

//   let regex = /\d\d\/\d\d\/\d\d\d\d/;

//   if(!regex.test(catchDataInput.value)) {
//     erro = true;
//     catchDivFinal.innerHTML = 'A data deve conter o formato dd/mm/aaaa';
//     return false;
//   }

//   let splitted = catchDataInput.value.split('/');
//   let day = splitted[0];
//   let month = splitted[1];
//   let year = splitted[3];

//   if(day < 0 || day > 30) {
//     erro = 1;
//     erro = true;
//     catchDivFinal.innerHTML = 'Dia inválido';
//     return false;
//   }

//   if(month < 1 || month > 12) {
//     erro = true;
//     catchDivFinal.innerHTML = 'Mês inválido';
//     return false;
//   }

//   if(year < 0) {
//     erro = true;
//     catchDivFinal.innerHTML = 'Ano inválido';
//     return false;
//   }
//   return true;
// }

// const catchDivFinal = document.getElementById('final-message');
// const catchNameInput = document.getElementById('name');
// function nameValidation() {
//   if(catchNameInput.value.length === 0) {
//     erro = true;
//     catchDivFinal.innerHTML = 'O nome não foi preenchido';
//     return false;
//   }
//   if(catchNameInput.value.length > 40) {
//     erro = true;
//     catchDivFinal.innerHTML = 'Preenchimento do campo Nome não pode ultrapassar 40 caracteres';
//     return false;
//   }
//   return true;
// }

// const catchEmailInput = document.getElementById('email');
// function emailValidation() {
//   if(catchEmailInput.value.length === 0) {
//     erro = true;
//     catchDivFinal.innerHTML = 'O email não foi preenchido';
//     return false;
//   }
//   if(catchEmailInput.value.length > 50) {
//     erro = true;
//     catchDivFinal.innerHTML = 'Preenchimento do campo Email não pode ultrapassar 50 caracteres';
//     return false;
//   }
//   return true;
// }

// const catchCpfInput = document.getElementById('cpf-number');
// function cpfValidation() {
//   if(catchCpfInput.value.length === 0) {
//     erro = true;
//     catchDivFinal.innerHTML ='O cpf não foi preenchido';
//     return false;
//   }
//   if(catchCpfInput.value.length > 11) {
//     erro = true;
//     catchDivFinal.innerHTML = 'Preenchimento do campo CPF não pode ultrapassar 11 caracteres';
//     return false;
//   }
//   return true;
// }

// const catchEnderecoInput = document.getElementById('address');
// function enderecoValidation() {
//   if(catchEnderecoInput.value.length === 0) {
//     erro = true;
//     catchDivFinal.innerHTML = 'O endereço não foi preenchido';
//     return false;
//   }
//   if(catchEnderecoInput.value.length > 200) {
//     erro = true;
//     catchDivFinal.innerHTML = 'Preenchimento do campo Endereço não pode ultrapassar 200 caracteres';
//     return false;
//   }
//   return true;
// }

// const catchCidadeInput = document.getElementById('city');
// function cidadeValidation() {
//   if(catchCidadeInput.value.length === 0) {
//     erro = true;
//     catchDivFinal.innerHTML = 'O campo Cidade não foi preenchido';
//     return false;
//   }
//   if(catchCidadeInput.value.length > 200) {
//     erro = true;
//     catchDivFinal.innerHTML = 'Preenchimento do campo Cidade não pode ultrapassar 200 caracteres';
//     return false;
//   }
//   return true;
// }

// const catchEstadoInput = document.getElementById('state');
// function estadoValidation() {
//   if(catchEstadoInput.value.length === 0) {
//     erro = true;
//     catchDivFinal.innerHTML = 'O campo Estado não foi preenchido. Selecione um dos estados da lista.';
//     return false;
//   }
// }

// const catchCurriculoInput = document.getElementById('resume');
// function curriculoValidation() {
//   if(catchCurriculoInput.value.length === 0) {
//     erro = true;
//     catchDivFinal.innerHTML = 'O campo Currículo não foi preenchido';
//     return false;
//   }
//   if(catchCurriculoInput.value.length > 1000) {
//     erro = true;
//     catchDivFinal.innerHTML = 'Preenchimento do campo Resumo do currículo não pode ultrapassar 1000 caracteres';
//     return false;
//   }
//   return true;
// }

// const catchCargoInput = document.getElementById('role');
// function cargoValidation() {
//   if(catchCargoInput.value.length === 0) {
//     erro = true;
//     catchDivFinal.innerHTML = 'O campo Cargo não foi preenchido';
//     return false;
//   }
//   if(catchCargoInput.value.length > 40) {
//     erro = true;
//     catchDivFinal.innerHTML = 'Preenchimento do campo Cargo não pode ultrapassar 40 caracteres';
//     return false;
//   }
//   return true;
// }

// const catchDescricaoInput = document.getElementById('roleDescription');
// function catchDescricaoValidation() {
//   if(catchDescricaoInput.value.length === 0) {
//     erro = true;
//     catchDivFinal.innerHTML = 'O campo Descrição do cargo não foi preenchido';
//     return false;
//   }
//   if(catchDescricaoInput.value.length > 500) {
//     erro = true;
//     catchDivFinal.innerHTML = 'Preenchimento do campo Descrição do cargo não pode ultrapassar 500 caracteres';
//     return false;
//   }
//   return true;
// }

// const catchSubmitButton = document.getElementById('submit');
// catchSubmitButton.addEventListener('click', validateAll);

// function validateAll(event) {
//   event.preventDefault();
//   erro = false;
//   nameValidation();
//   emailValidation();
//   cpfValidation();
//   enderecoValidation();
//   cidadeValidation();
//   estadoValidation();
//   // dateValidation();
//   curriculoValidation();
//   cargoValidation();
//   catchDescricaoValidation();
//   validationError();
// }

// const catchFormInput = document.getElementById('cv-form');
// function validationError() {
//   if(!erro) {
//     catchDivFinal.innerHTML = `${catchDataInput.value}
//     ${catchCpfInput.value} 
//     ${catchEnderecoInput.value}
//     ${catchCidadeInput.value} 
//     ${catchEstadoInput.value} 
//     ${catchCurriculoInput.value}
//     ${catchCargoInput.value}
//     ${catchDescricaoInput.value} 
//     ${catchDataInput.value}`;
//   }
// }

