const bookModel = require('../models/bookstoremodels');
const bookView = require('../views/bookstoreviews');

exports.getAllBooks = (req, res) => {
  const books = bookModel.getAllBooks();
  bookView.renderBooks(res, books);
};

exports.createBook = (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return bookView.renderError(res, 400, 'Title and author are required');
  }
  const newBook = bookModel.addBook(title, author);
  bookView.renderBooks(res, [newBook]);
};
