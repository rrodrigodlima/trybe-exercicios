const fs = require('fs').promises;

async function simpsonsData() {
  try {
    const rawdata = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(rawdata);
    for (let i = 0; i < simpsons.length; i++) {
      console.log(`${simpsons[i].id} - ${simpsons[i].name}`)
    } 
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

simpsonsData()

