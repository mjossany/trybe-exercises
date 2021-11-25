const services = require('../services');

module.exports = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const response = await services.createUser(username, password);
    if (response.acknowledged) {
      return res.status(201).json({ message: 'Usuário criado com sucesso' });
    }
    return res.status(400).json({ message: 'Not found' });
  } catch (err) {
    next(err);
  }
};