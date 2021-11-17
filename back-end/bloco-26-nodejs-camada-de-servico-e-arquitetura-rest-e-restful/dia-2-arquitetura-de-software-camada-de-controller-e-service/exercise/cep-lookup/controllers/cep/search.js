const service = require('../../services/cep');

module.exports = async (req, res, next) => {
  try {
    const cep = req.processedCep;

    const found = await service.findByCep(cep);

    if (found.error) {
      return res.status(404).json(found);
    };
    return res.status(200).json(found)
  } catch (err) {
    next(err);
  };
};