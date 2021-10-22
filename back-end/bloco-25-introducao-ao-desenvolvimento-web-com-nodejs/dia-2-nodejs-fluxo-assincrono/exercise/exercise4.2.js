const fs = require('fs').promises

const func = async (id) => {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf8')
    const simpsons = await JSON.parse(data)
    const found = simpsons.find((character) => +character.id === id)
    if (found) {
      console.log(found)
    } else {
      throw new Error('id não encontrado')
    }
  } catch(err) {
    console.error(`${err.message}`)
  }
}

func(10)