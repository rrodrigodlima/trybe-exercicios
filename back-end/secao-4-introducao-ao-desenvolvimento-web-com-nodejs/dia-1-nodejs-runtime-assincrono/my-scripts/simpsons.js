const fs = require('fs').promises;

async function readSimpsonsData() {
  try {
    const rawdata = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(rawdata);
    return simpsons
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

readSimpsonsData()

module.exports = {
  readSimpsonsData
}