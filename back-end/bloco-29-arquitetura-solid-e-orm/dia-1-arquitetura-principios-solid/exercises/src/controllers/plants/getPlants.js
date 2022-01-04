const services = require('../../services/plants');

module.exports = async (_req, res, next) => {
  try {
    const response = await services.getPlants();
    if (!response) return res.status(404).json({ message: 'no plant on database' });
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  };
};