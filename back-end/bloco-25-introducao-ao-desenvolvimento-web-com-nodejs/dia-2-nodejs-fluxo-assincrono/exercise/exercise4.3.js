const fs = require('fs').promises

const func = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf8')
  const result = await JSON.parse(data)
  const filtered = await result.filter((character) => +character.id !== 10 && +character.id !== 6)
  const filteredStringfied = JSON.stringify(filtered)
  await fs.writeFile('./simpsons copy.json', filteredStringfied)
  console.log('Arquivo escrito com sucesso')
}

func()