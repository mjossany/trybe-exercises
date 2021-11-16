const Cep = require('../../models/documents/')

module.exports = async (cepToSearch) => {
  const { cep, logradouro, bairro, localidade, uf, message, code } = await Cep.findByCep(cepToSearch);

  if (message) return {
    message,
    code,
  };

  return {
    cep,
    logradouro,
    bairro,
    localidade,
    uf
  };
};