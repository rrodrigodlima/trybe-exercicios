const books = require('./biblioteca');

const oldBooks = 
  books.filter((book) =>  (2022 - book.releaseYear) > 60)
    .sort((a, b) => a.releaseYear < b.releaseYear ? 1 : -1)
      .map((book) => book.name);
      
console.log(oldBooks);