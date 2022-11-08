const books = require('./biblioteca');

const nameAndAge = books.map((book) => (
  {
    author: book.author.name,
    age: book.releaseYear - book.author.birthYear,
  }
)).sort((a, b) => a.age -b.age);

console.log(nameAndAge);