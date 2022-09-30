function fatorial(num){
    let fat = 1;
    for (let index = num; index > 0; index -= 1) {
      fat *= index;
    }
    return fat;
}



console.log(fatorial(5));