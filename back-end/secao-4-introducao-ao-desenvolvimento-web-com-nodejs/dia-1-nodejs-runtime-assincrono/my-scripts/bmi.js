const readline = require('readline-sync');

const peso = readline.question('Qual seu peso?');
const altura = readline.questionFloat('Qual sua altura?');

function imc (peso, altura) {
  const promise = new Promise((resolve, reject) => {
    if (altura == 0)
      reject(new Error("Não pode ser feito uma divisão por zero"));
    
    const resultado = peso/(altura*altura);
    resolve(resultado)
  });
  return promise;
}

const doSomething = async () => {
  const resultado = await imc(peso, altura);
  console.log(resultado);
  if(resultado < 18.5) {
    console.log('Magreza')
  } if(resultado > 18.5 & resultado < 24.9) {
    console.log('Peso normal')
  } if(resultado > 25 & resultado < 29.9) {
    console.log('Sobrepeso')
  } if(resultado > 30 & resultado < 34.9) {
    console.log('Obesidade grau 1')
  } if(resultado > 35 & resultado < 39.9) {
    console.log('Obesidade grau 2')
  } if(resultado > 40) {
    console.log('Obesidade graus 3 e 4')
  }
};

doSomething();


// const doSomething = async (peso,altura) => {
//   const resultado = peso/(altura*altura);
//   await console.log(resultado)
// };
// doSomething(70, 1.80)