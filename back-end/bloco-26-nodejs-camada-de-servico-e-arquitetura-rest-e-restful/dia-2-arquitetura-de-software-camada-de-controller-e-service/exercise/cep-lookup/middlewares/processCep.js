module.exports = (req, _res, next) => {
  try {
    const { cep : cepBody } = req.body
    const { cep : cepParams} = req.params;

    const cep = checkReq(cepParams, cepBody);

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

const checkReq = (cep1, cep2) => {
  if (cep1) return cep1;
  return cep2;
};