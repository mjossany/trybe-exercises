const connection = require('./connection');

const insertUser = async (firstName, lastName, email) => {
  const data = await connection();
  const retorno = await data.collection('users').insertOne({ firstName, lastName, email });
  return retorno;
};

const getUsers = async () => {
  const data = await connection();
  const retorno = await data.collection('users').find().toArray();
  if (retorno.length === 0) return null;
  return retorno;
};

module.exports = {
  insertUser,
  getUsers,
};