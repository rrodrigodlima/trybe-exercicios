const books = require('./biblioteca');

const authorWith3DotsOnName = 
  books.find((book) => (
    book.author.name[1] === '.'
    && book.author.name[4] === '.'
    && book.author.name[7] === '.'
  )).name;
console.log(authorWith3DotsOnName);