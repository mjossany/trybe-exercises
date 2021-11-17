module.exports = (req, res, next) => {
  try {
    const { cep } = req.params;
  
    const regexCep = /\d{5}-?\d{3}/;

    const response = cep.match(regexCep);
  
    if (response === null || cep !== response[0]) return res.status(400).json({
      "error": {
        "code": 'invalidData',
        "message": 'CEP inválido',
      },
    });
  
    next();
  } catch (err) {
    next(err);
  };
};