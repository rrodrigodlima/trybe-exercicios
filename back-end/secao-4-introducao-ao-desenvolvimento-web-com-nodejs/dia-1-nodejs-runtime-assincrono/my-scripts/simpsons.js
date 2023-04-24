const fs = require('fs').promises;

async function simpsonsData() {
  try {
    const rawdata = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(rawdata);
    console.log(simpsons)
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

simpsonsData()