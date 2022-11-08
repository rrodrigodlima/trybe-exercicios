const books = require('./biblioteca');

const oldBooksOrdered = 
  books.filter((book) =>  (2022 - book.releaseYear) > 60)
  .sort((a, b) => a.releaseYear > b.releaseYear ? 1 : -1);

  console.log(oldBooksOrdered);