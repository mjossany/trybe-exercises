const fs = require('fs').promises

const func = async () => {
  const data = await fs.readFile('./simpsonFamily.json', 'utf8')
  const result = await JSON.parse(data)
  result.push({id: '5', name: "Nelson Muntz"})
  const resultAddedStringfied = JSON.stringify(result)
  await fs.writeFile('./simpsonFamily.json', resultAddedStringfied)
}

func()