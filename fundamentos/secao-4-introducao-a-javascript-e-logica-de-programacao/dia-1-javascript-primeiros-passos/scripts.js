let a = 3;
let b = 5;
let c = 7;

//---

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//-----


if (a > b) {
    console.log("a é maior");
 }
else if (b > a) {
    console.log("b é maior");
}

//---

if (a > b && a > c) {
    console.log(a);
}
else if (b > a && b > c) {
    console.log(b);
}
else if (c > a && c > b) {
    console.log(c);
}

//----------

let parametro = true;

if (parametro === true) {
    console.log("positivo");
}
else if (parametro === false) {
    console.log("negative");
}
else {
    console.log("zero");
}

