module.exports = (req, _res, next) => {
  try {
    const { cep } = req.params;
    const cepArray = cep.split("");

    const needToProcess = cepArray.some((letter) => letter === "-");

    let cepProcessed = "";

    if (needToProcess) {
      const cepArrayWithoutDash = cepArray.filter((letter) => letter !== "-");
      cepProcessed = cepArrayWithoutDash.join('');
      req.processedCep = cepProcessed;
      return next();
    }

    cepProcessed = cep;
    req.processedCep = cepProcessed;
    return next();

  } catch (err) {
    next(err);
  };
};