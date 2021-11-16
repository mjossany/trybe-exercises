const connection = require('../connection');

module.exports = async (cepToSearch) => {
  const query = 'SELECT * FROM ceps WHERE cep = ?;';
  const [address] = await connection().execute(query, [cepToSearch]);
  return address.length === 0
    ? {
      "code": 'notFound',
      "message": 'CEP não encontrado',
    }
    : address[0];
};