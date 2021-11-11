const express = require('express');
const app = express();
const port = 3000;
const Author = require('./models/Author');
const Book = require('./models/Book');

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});
app.get('/books', async (req, res) => {
  const { id } = req.query;
  const books = id 
  ? await Book.getByAuthorId(id)
  : await Book.getAll();
  res.status(200).json(books)
});
app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.getBookById(id);
  if (!book) return res.status(404).json({ message: 'Not Found' });
  return res.status(200).json(book);
})

app.listen(port, () => console.log(`Example app listen on port ${port}!`))