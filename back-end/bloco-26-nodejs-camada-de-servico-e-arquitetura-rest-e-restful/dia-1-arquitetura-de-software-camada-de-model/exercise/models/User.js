const connection = require('./connection');
const { ObjectId } = require('mongodb');

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

const findUserById = async (id) => {
  const data = await connection();
  const retorno = await data.collection('users').find({ _id: new ObjectId(id) }).toArray();
  return retorno;
}

const updateUserById = async (id, firstName, lastName, email) => {
  const data = await connection();
  const { matchedCount } = await data.collection('users').updateOne(
      { _id: ObjectId(id) },
      { $set: {firstName, lastName, email} }
    );
  if (matchedCount === 0) return false;
  return true;
}

module.exports = {
  insertUser,
  getUsers,
  findUserById,
  updateUserById,
};