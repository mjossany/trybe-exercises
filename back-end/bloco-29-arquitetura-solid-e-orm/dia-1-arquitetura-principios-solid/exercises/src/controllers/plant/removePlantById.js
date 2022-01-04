const services = require('../../services/plant');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await services.removePlantById(id);
    if (response) return res.status(204).end();
  } catch (err) {
    next(err);
  };
};