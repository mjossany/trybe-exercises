const connection = require('../connection');

module.exports = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';
  const [response] = await connection().execute(query, [cep, logradouro, bairro, localidade, uf]);
  return response;
}