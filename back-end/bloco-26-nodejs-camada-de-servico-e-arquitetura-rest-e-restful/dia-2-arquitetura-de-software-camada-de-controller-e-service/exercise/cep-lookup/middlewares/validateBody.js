const Joi = require('joi');

module.exports = (req, res, next) => {
  try {
    const { cep, logradouro, bairro, localidade, uf } = req.body;
  
    const schema = Joi.object({
      cep: Joi.string()
        .pattern(new RegExp(/^\d{5}(-)?\d{3}$/))
        .required(),
      logradouro: Joi.string()
        .required(),
      bairro: Joi.string()
        .required(),
      localidade: Joi.string()
        .required(),
      uf: Joi.string()
        .required(),
    });
  
    const { error } = schema.validate({ cep, logradouro, bairro, localidade, uf });

    if (error) res.status(400).json({
      "error": {
        "code": 'invalidData',
        "message": error.details[0].message,
      },
    });

    return next();
    
  } catch (err) {
    next(err);
  };
};