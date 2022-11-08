const books = require('./biblioteca');

const file = books.map((book) => 
`${book.name} - ${book.genre} - ${book.author.name}`);
console.log(file);