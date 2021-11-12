const connection = require('./connection');

const insertUser = async (firstName, lastName, email) => {
  const data = await connection();
  const retorno = await data.collection('users').insertOne({ firstName, lastName, email });
  return retorno;
}

module.exports = insertUser;