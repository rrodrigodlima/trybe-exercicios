const books = require('./biblioteca');

const fantasyOrScienceFictionAuthors = 
  books.filter(book => book.genre !== 'Terror')
    .map((book) => book.author.name)
      .sort();
console.log(fantasyOrScienceFictionAuthors);