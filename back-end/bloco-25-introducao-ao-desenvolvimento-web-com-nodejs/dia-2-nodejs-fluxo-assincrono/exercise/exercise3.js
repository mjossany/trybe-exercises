const randomNumber = () => {
  return Math.floor(Math.random() * 100 + 1)
}

const calculate = async () => {
  const parameters = Array.from({ length: 3}).map(randomNumber)
  try {
    const result = await calculate(...parameters)
    console.log(`Sucesso: ${result}`)
  } catch (err) {
    console.error(err)
  }
}