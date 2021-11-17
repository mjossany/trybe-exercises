const connection = require('../connection');
const axios = require('axios').default;

module.exports = async (cepToSearch) => {
  try {
    const query = 'SELECT * FROM ceps WHERE cep = ?;';
    const [address] = await connection().execute(query, [cepToSearch]);
    if (address.length !== 0) return address[0];

    const { data } = await axios.get(`https://viacep.com.br/ws/${cepToSearch}/json/`);
    
    return data.erro
    ? {"error": { "code": 'notFound', "message": 'Cep não encontrado' }}
    : data;
  } catch (err) {
    next(err);
  };
};