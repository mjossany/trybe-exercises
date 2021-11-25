const connection = require('../connection');

module.exports = async (username, password) => {
  const db = await connection();
  const response = await db.collection('users').insertOne({ username, password });
  return response;
};