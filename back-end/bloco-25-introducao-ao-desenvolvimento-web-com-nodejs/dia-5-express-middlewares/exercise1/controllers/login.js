const crypto = require('crypto');

const generateToken = () => {
  return crypto.randomBytes(8).toString('hex');
};

const validateEmail = (email) => {
  const regexEmail = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
  if (!email) return false;
  if (!email.match(regexEmail)) return false;
  return true;
};

const validatePassword = (password) => {
  if (!password) return false;
  if (password.toString().length < 4 || password.toString().length > 8) return false;
  if (typeof password !== 'number') return false;
  return true;
};

const validateLogin = (req, res) => {
  const { email, password } = req.body;
  const isValidEmail = validateEmail(email);
  const isValidPassword = validatePassword(password);

  if (!isValidEmail || !isValidPassword) return res.status(400).json({ message: 'email or password is incorrect'});
  const token = generateToken();
  return res.status(200).json({ token });
};

module.exports = validateLogin;