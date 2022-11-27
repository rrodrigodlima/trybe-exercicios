/* eslint-disable no-unused-expressions */
import validator from 'validator';

const inputArea = document.getElementById('textArea');
const dropdown = document.getElementById('dropdown');
const validateBtn = document.querySelector('button');
const result = document.querySelector('h2');
// const validated = result.innerText='✅';
// const falsed = result.innerText='❌'

validateBtn.addEventListener('click', () => {
  if (dropdown.selectedIndex === 0) {
    const validateEmail = validator.isEmail(`${inputArea.value}`);
    validateEmail ? result.innerText = '✅' : result.innerText = '❌';
  }
  if (dropdown.selectedIndex === 1) {
    const validateCreditCard = validator.isCreditCard(`${inputArea.value}`);
    validateCreditCard ? result.innerText = '✅' : result.innerText = '❌';
  }
  if (dropdown.selectedIndex === 2) {
    const validateBtc = validator.isBtcAddress(`${inputArea.value}`);
    validateBtc ? result.innerText = '✅' : result.innerText = '❌';
  }
  if (dropdown.selectedIndex === 3) {
    const validateEth = validator.isEthereumAddress(`${inputArea.value}`);
    validateEth ? result.innerText = '✅' : result.innerText = '❌';
  }
  if (dropdown.selectedIndex === 4) {
    const validateIBAN = validator.isIBAN(`${inputArea.value}`);
    validateIBAN ? result.innerText = '✅' : result.innerText = '❌';
  }
});
