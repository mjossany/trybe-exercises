function preencheSelect() {
  const catchSelect = document.getElementById('estado');
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