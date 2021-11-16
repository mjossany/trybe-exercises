const service = require('../../services/cep');

module.exports = async (req, res, next) => {
  try {
    const { cep } = req.params;

    const found = await service.findByCep(cep);

    if (found.message) {
      return res.status(400).json({
        "error": {
          "code": found.code,
          "message": found.message,
        },
      });
    };
    return res.status(200).json(found)
  } catch (err) {
    next(err);
  };
};