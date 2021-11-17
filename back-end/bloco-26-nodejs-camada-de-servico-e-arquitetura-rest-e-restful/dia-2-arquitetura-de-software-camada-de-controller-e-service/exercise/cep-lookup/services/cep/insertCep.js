const Cep = require('../../models/documents');

module.exports = async (bodyObj) => {
    const response = await Cep.insertCep(bodyObj);
    return response;
};