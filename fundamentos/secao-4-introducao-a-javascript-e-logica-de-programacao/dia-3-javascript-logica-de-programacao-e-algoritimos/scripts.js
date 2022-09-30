// fatorial
function fatorial(num){
    let fat = 1;
    for (let index = num; index > 0; index -= 1) {
      fat *= index;
    }
    return fat;
}
console.log(fatorial(5));

for (let index = 0; index > 0; index +=1) {

}
// reverse word
let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {

  reverseWord += word[word.length - 1 - index];

}
console.log(reverseWord);


// ver maior palavra e menor palavra num array 

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);

let biggestPrimeNumber = 0;
function maiorPrimo(limite){

    for (let currentNumber = 2; currentNumber <= limite; currentNumber += 1) {
      let isPrime = true;
      for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
        if (currentNumber % currentDivisor === 0) {
          isPrime = false;
        }
      }
      if (isPrime) {
        biggestPrimeNumber = currentNumber;
      }
    }
    return biggestPrimeNumber;
}
console.log(maiorPrimo(100));