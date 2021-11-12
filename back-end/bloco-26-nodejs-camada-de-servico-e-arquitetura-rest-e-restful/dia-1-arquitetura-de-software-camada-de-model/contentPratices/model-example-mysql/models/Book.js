const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  const data = await connection();
  const allBooks = await data.collection('books').find().toArray()
  const booksTitles = allBooks.map((book) => book.title);
  return booksTitles;
};

const getByAuthorId = async (authorId) => {
  const data = await connection();
  const books = await data.collection('books').find({ author_id: +authorId}).toArray();
  const booksNames = books.map((book) => book.title);
  return booksNames;
};

const getBookById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  };

  const data = await connection();
  const book = await data.collection('books').findOne(new ObjectId(id));
  return book.title;
};

module.exports = {
  getAll,
  getByAuthorId,
  getBookById,
}

// const getAll = async () => {
//   const [books] = await connection.execute('SELECT * FROM books');
//   return books;
// };

// const getByAuthorId = async (id) => {
//   const query = 'SELECT * FROM books WHERE author_id = ?;';
//   const [books] = await connection.execute(query, [id]);
//   return books;
// }

// const getBookById = async (id) => {
//   const query = 'SELECT * FROM books WHERE id = ?;';
//   const [book] = await connection.execute(query, [id]);

//   if (book.length === 0) return null;
  
//   return book[0].title;
// }

// const getAuthorsIds = async () => {
//   const query = 'SELECT DISTINCT author_id FROM books;'
//   const [numbers] = await connection.execute(query);
//   const arrayNumbers = numbers.map((number) => number.author_id);
//   return arrayNumbers;
// };

// const isNewBookValid = async (title, authorId) => {
//   const numbers = await getAuthorsIds();
//   if (!title || title.length < 3) return false;
//   if (!authorId) return false;
//   const exists = numbers.some((number) => number === authorId);
//   console.log(exists);
//   if (!exists) return false;

//   return true;
// };

// const createBook = async (title, authorId) => connection.execute('INSERT INTO books (title, author_id) VALUES (?, ?)', [title, authorId]);

// module.exports = {
//   getAll,
//   getByAuthorId,
//   getBookById,
//   isNewBookValid,
//   createBook
// }
