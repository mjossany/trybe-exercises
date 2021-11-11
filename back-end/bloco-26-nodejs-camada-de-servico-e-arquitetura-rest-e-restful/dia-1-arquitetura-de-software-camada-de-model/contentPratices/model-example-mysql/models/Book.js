const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM books');
  return books;
};

const getByAuthorId = async (id) => {
  const query = 'SELECT * FROM books WHERE author_id = ?;';
  const [books] = await connection.execute(query, [id]);
  return books;
}

const getBookById = async (id) => {
  const query = 'SELECT * FROM books WHERE id = ?;';
  const [book] = await connection.execute(query, [id]);

  if (book.length === 0) return null;
  
  return book[0].title;
}

module.exports = {
  getAll,
  getByAuthorId,
  getBookById,
}
