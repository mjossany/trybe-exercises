const fs = require('fs').promises

const func = async () => {
  const data = await fs.readFile('./simpsonFamily.json', 'utf8')
  const result = await JSON.parse(data)
  const newResult = result.map(({id, name}) => ({
    ["id"]: id,
    ["name"]: name === "Nelson Muntz" ? "Maggie Simpson" : name
  }))
  const newResultStringfied = JSON.stringify(newResult)
  await fs.writeFile('./simpsonFamily.json', newResultStringfied)
}

func()