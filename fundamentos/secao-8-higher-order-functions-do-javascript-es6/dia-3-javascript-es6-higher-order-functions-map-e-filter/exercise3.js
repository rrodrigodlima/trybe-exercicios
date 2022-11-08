const books = require('./biblioteca');

const fantasyOrScienceFiction = 
  books.filter((book) => book.genre !== 'Terror');

  console.log(fantasyOrScienceFiction);