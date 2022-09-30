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

let word = 'tryber'
console.log(word[0])