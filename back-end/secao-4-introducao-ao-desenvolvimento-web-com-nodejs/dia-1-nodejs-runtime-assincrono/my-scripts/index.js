const { readSimpsonsData } = require('./simpsons.js')

async function main() {
  const simpsons = await readSimpsonsData();

  for (let i = 0; i < simpsons.length; i++) {
    console.log(`${simpsons[i].id} - ${simpsons[i].name}`)
  }

}

main()