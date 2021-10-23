const positivoNegativoNeutro = (number) => {
  if (number > 0) {
    return "positivo";
  } else if (number < 0) {
    return "negativo"
  } else {
    return "neutro"
  }
}

module.exports = positivoNegativoNeutro