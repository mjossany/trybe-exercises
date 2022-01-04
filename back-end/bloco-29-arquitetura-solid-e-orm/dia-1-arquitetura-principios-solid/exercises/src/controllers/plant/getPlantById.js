const services = require('../../services/plant');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await services.getPlantById(id);
    if (!response) return res.status(404).json({ message: 'plant not found' });
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  };
};
