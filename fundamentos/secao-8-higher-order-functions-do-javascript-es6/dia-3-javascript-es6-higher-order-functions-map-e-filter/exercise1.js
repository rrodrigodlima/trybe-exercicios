const books = require('./biblioteca');

const formatedBookNames = books.map((book) => 
`${book.name} - ${book.genre} - ${book.author.name}`);
console.log(formatedBookNames);