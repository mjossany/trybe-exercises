const fs = require('fs').promises

const func = async () => {
  try {
    fs.readFile('./simpsons.json', 'utf8')
      .then((data) => JSON.parse(data))
      .then((result) => result.forEach(({id, name}) => console.log(`${id} - ${name}`)))
  } catch(err) {
    console.error(err.message)
  }
}

func()