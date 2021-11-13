const connection = require('./connection');

const insertUser = async (firstName, lastName, userEmail, userPassword) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);';
  const [response] = await connection.execute(query, [firstName, lastName, userEmail, userPassword]);
  return { id: response.insertId, firstName, lastName, userEmail };
}

const getUsers = async () => {
  const query = 'SELECT * FROM users;';
  const [response] = await connection.execute(query);
  return response.length === 0 ? [] : response;
}

const selectUserById = async (userId) => {
  const query = 'SELECT * FROM users WHERE id = ?;';
  const [row] = await connection.execute(query, [userId]);
  return row.length === 0 ? null : row[0];
};

module.exports = {
  insertUser,
  getUsers,
  selectUserById,
}