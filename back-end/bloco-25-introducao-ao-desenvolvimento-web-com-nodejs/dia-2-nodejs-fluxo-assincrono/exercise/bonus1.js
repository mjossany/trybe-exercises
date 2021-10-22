const fs = require('fs').promises
const readLine = require('readline-sync')

const func = async () => {
  try {
    const fileChosen = readLine.question('Qual arquivo você deseja ler? ')

    const read = await fs.readFile(fileChosen, 'utf8')

    console.log(read)

  } catch(err) {
    console.error('Arquivo inexistente')
  }
}

func()