const fs = require('fs').promises
const readLine = require('readline-sync')

const func = async () => {
  try {
    const file = readLine.question('Qual arquivo você deseja utilizar? ')
    const readFile = await fs.readFile(file, 'utf8')
    
    const word = readLine.question('Qual palavra deseja substituir? ')
    const newWord = readLine.question('Por qual palavra deseja substituir? ')

    const fileContent = await fs.readFile(file, 'utf8')
    const newContent = fileContent.replace(new RegExp(word, 'g'), newWord)
    console.log(newContent)

    const destinyFile = readLine.question('Qual é o arquivo de destino? ')
    await fs.writeFile(`./${destinyFile}`, newContent)
  } catch(err) {
    console.log('Arquivo não encontrado, erro: ', err.message)
  }
}

func()