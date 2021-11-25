const services = require('../services');

module.exports = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const response = await services.singUp(username, password);
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};