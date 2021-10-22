const fs = require('fs').promises

const func = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf8')
  const result = await JSON.parse(data);
  const resultFiltered = result.filter((character) => +character.id === 1 || +character.id === 4)
  const filteredStringfied = JSON.stringify(resultFiltered)
  await fs.writeFile('simpsonFamily.json', filteredStringfied)
}

func()