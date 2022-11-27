import Swal from 'sweetalert2';

const searchBtn = document.querySelector('.search-btn');

const coinInput = document.querySelector('#coin-input');

const coinsList = document.querySelector('.coins');

function fetchAPI(coin) {
  const url = `https://api.exchangerate.host/lastest?base=${coin}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.base !== coin.toUpperCase()) {
        throw new Error('Moeda não existente!');
      }
      return data.rates;
    });
}

function renderCoins(coins) {
  coinsList.innerHTML = '';

  const coinsArray = Object.entries(coins);

  coinsArray.forEach((coin) => {
    const [coinName, value] = coin;

    const li = document.createElement('li');

    li.textContent = `${coinName} - ${value}`;
    coinsList.appendChild(li);
  });
}

function handleSearch() {
  const coin = coinInput.value;

  if (!coin) {
    Swal.fire(
      'Ooopss...',
      'Digite uma moeda válida',
      'error',
    );
    return;
  }

  fetchAPI(coin)
    .then(renderCoins)
    .catch((error) => {
      Swal.fire(
        'Ooopss...',
        `${error.message}`,
        'error',
      );
    });
}

searchBtn.addEventListener('click', handleSearch);
