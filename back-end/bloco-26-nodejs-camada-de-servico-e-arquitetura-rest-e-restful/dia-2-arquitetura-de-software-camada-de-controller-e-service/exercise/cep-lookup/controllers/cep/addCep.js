const service = require('../../services/cep')

module.exports = async (req, res, next) => {
  try {
    const cep = req.processedCep;
    const { logradouro, bairro, localidade, uf } = req.body;

    const found = await service.findByCep(cep);

    if (!found.message) {
      return res.status(409).json({
        "error": {
          "code": 'alreadyExists',
          "message": 'CEP já existente',
        },
      });
    };

    const { affectedRows } = await service.insertCep({ cep, logradouro, bairro, localidade, uf });
    
    if (affectedRows) return res.status(201).json(req.body);

  } catch (err) {
    next(err);
  };
};