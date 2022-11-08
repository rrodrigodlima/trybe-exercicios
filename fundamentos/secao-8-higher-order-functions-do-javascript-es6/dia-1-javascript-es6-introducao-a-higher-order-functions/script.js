// const employeeGenerator = fullName => {
//   const email = fullName.toLowerCase().split(' ').join('_');
//   return { fullName, email: `${email}@trybe.com` };
// };

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: callback('Carla Paiva') // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// console.log(newEmployees(employeeGenerator));

// //

// const numberChecker = (myNumber, number) => myNumber === number;

// const lotteryResult = (myNumber, call) => {
//   const number = Math.floor((Math.random() * 5) + 1);
//   return call(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
// };

// console.log(lotteryResult(2, numberChecker));

// //

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// // erificar se a resposta do aluno está certa, errada ou inexistente, e assim atribuir a devida pontuação.
// const compareAnswers = (rightAnswer, studentAnswer) => {
//   if( rightAnswer === studentAnswer) {
//     return 1;
//   } if (studentAnswer === 'N.A') {
//     return 0;
//   } 
//   return -0,5;
// };

// const countPoints = (rightAnswers, studentAnswers, action) => {
//   let counter = 0;

//   for (let index = 0; index < rightAnswers.length; index += 1) {

//     const actionReturn = action(rightAnswers[index], studentAnswers[index]);

//     counter += actionReturn;
//   }
//   return `Resultado final: ${counter} pontos`;
// };
// console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = () => {
  const damage = Math.floor(((Math.random() *15) +1) + dragon.strength);
  return damage;
};

const warriorAttack = () => {
  const value = Math.floor((warrior.strength * warrior.weaponDmg) - warrior.strength);
  const damage = Math.floor(((Math.random() *value) +1) + value);
  return damage;
};


const mageAttack = () => {
  const value = Math.floor((mage.intelligence * 2) - mage.intelligence);
  const damage = Math.floor(((Math.random() *value) +1) + value);
  if (mage.mana > 15){ 
    mage.mana -= 15;
  } if (mage.mana < 15) {
    return "Não possui mana suficiente";      
    };
  return {
    dano: `${damage}`,
    mana: `${mage.mana}`
  }
};


const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack(mage);
    const mageDamage = mageTurnStats.dano;
    mage.damage = mageDamage;
    mage.mana -= mageTurnStats.mana;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());