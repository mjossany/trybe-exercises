const connection = require('./connection');

const insertUser = async (firstName, lastName, userEmail, userPassword) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);';
  const [response] = await connection.execute(query, [firstName, lastName, userEmail, userPassword]);
  return { id: response.insertId, firstName, lastName, userEmail };
}

const getUsers = async() => {
  const query = 'SELECT * FROM users;';
  const [response] = await connection.execute(query);
  return response.length === 0 ? [] : response;
}

module.exports = {
  insertUser,
  getUsers,
}