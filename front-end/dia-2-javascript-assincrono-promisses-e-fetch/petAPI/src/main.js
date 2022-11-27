const catBtn = document.getElementById('cat');
const dogBtn = document.getElementById('dog');
const surpriseBtn = document.getElementById('surprise');
const petImage = document.querySelector('img');

dogBtn.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => {
    const petURL = data.message;
    petImage.src = petURL;
  })
});

catBtn.addEventListener('click', () => {
  fetch("https://aws.random.cat/meow")
  .then((res) => res.json())
  .then((data) => {
    const petURL = data.file;
    petImage.src = petURL;
  });
});

surpriseBtn.addEventListener('click', () => {
  Promise.any([
    fetch('https://dog.ceo/api/breeds/image/random'),
    fetch("https://aws.random.cat/meow"),    
  ])
  .then((response) => response.json())
  .then((data) => {
    const petURL = data.file || data.message;
    petImage.src = petURL;
  })
})