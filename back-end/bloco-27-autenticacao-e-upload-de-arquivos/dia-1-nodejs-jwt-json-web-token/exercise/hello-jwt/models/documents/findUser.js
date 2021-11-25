const connection = require('../connection');

module.exports = async (username) => {
  const db = await connection();
  const response = await db.collection('users').findOne({ username });
  return response;
};