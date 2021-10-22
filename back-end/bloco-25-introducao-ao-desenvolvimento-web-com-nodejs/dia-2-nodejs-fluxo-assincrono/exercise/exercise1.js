
const calculate = (param1, param2, param3) => {
  return new Promise ((resolve, reject) => {
    if ( isNaN(param1) || isNaN(param2) || isNaN(param3)) {
      console.log(!isNaN(param1))      
      return reject(new Error("Informe apenas números"))
    }
    const sumMult = ((param1 + param2) * param3)
    if (sumMult < 50) {
      return reject(new Error("Valor muito baixo"))
    } else {
      return resolve(sumMult)
    }
  })
}

module.exports = calculate;