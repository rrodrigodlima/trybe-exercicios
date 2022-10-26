// const order = {
//     name: 'Rafael Andrade',
//     phoneNumber: '11-98763-1416',
//     address: {
//       street: 'Rua das Flores',
//       number: '389',
//       apartment: '701',
//     },
//     order: {
//       pizza: {
//         marguerita: {
//           amount: 1,
//           price: 25,
//         },
//         pepperoni: {
//           amount: 1,
//           price: 20,
//         },
//       },
//       drinks: {
//         coke: {
//           type: 'Coca-Cola Zero',
//           price: 10,
//           amount: 1,
//         },
//       },
//       delivery: {
//         deliveryPerson: 'Ana Silveira',
//         price: 5,
//       },
//     },
//     payment: {
//       total: 60,
//     },
//   };
  
//   const customerInfo = (order) => {
//    return console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber},R. ${order.address.street}, Nº: ${order.address.number},AP: ${order.address.apartment}.`)
//   };
  
//   customerInfo(order);
   
//   order.name='Luiz Silva';
//   order.payment.total=50;
//   const orderModifier = (order) => {
//     return console.log(`Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} é de R$ ${order.payment.total},00.`)  
//   };
  
//   orderModifier(order);

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNightTurn = (obj, key, value) => {
  obj[key] = value;
}
addNightTurn(lesson2,'turno','noite');

console.log(lesson2);

const listKeys = obj => Object.keys(obj);

const objLength = obj => Object.keys(obj).length;

const objValues = obj => Object.values(obj);

const allLessons = Object.assign({},{ lesson1, lesson2, lesson3 });

console.log(allLessons);

const numberOfStudents = parseInt(lesson1.numeroEstudantes) + parseInt(lesson2.numeroEstudantes) + parseInt(lesson3.numeroEstudantes);

console.log(numberOfStudents);

const getValueByNumber = (obj,num) => Object.values(obj)[num];

console.log(getValueByNumber(lesson1, 2));

const verifyPair = (obj,key,value) => {
  const objEntries = Object.entries(obj);
  let isEqual = false;
  for (let index in objEntries){
    if (objEntries[index][0] === key && objEntries[index][1] === value) isEqual = true;
  }
  return isEqual;
}

// const mathClass = () => parseInt(lesson1.numeroEstudantes) + parseInt(lesson3.numeroEstudantes);
// console.log(mathClass());

const getNumberOfStudentsMath = (obj) => {
  let total = 0; // variavel para armazenar valor
  const array = Object.keys(obj); // array 
  for (index in array) {
    if(obj[array[index]].materia === 'Matemática') {
    total += obj[array[index]].numeroEstudantes;
    }
  }
  return total;
}
console.log(getNumberOfStudentsMath(allLessons));

