import validator from "validator";

const inputArea = document.getElementById('textArea');
const dropdown = document.getElementById('dropdown');
const validateBtn = document.querySelector('button');
const result = document.querySelector('h2');
// const validated = result.innerText='✅';
// const falsed = result.innerText='❌'

validateBtn.addEventListener('click', () => {
  if (dropdown.selectedIndex === 0) {
    const validateEmail = validator.isEmail(`${inputArea.value}`);
    validateEmail ? result.innerText='✅' : result.innerText='❌';
    console.log('oi');
  }
});



console.log(validator.isEmail('oi@gmail.com'));