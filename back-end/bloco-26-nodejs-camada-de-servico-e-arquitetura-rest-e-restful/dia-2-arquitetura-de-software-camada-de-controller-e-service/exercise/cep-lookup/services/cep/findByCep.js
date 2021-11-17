const Cep = require('../../models/documents/')

module.exports = async (cepToSearch) => {
  return await Cep.findByCep(cepToSearch);
};