const connection = require('./connection');

const getByAuthorId = async (id) => {
  const query = 'SELECT * FROM books WHERE author_id = ?;';
  const [books] = await connection.execute(query, [id]);
  return books;
}

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM books');
  return books;
};

module.exports = {
  getAll,
  getByAuthorId,
}
