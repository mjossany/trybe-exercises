const services = require('../services');

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;
    const response = await services.login(username, password);
    if (response.err) {
      return res.status(400).json({ message: response.err.message });
    }
    res.status(200).json({ token: response });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};