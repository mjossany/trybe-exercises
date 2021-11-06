const validateUsername = (username) => {
  if (!username || username.length <= 3) return false;
  return true;
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

const registerUser = (req, res, _next) => {
  const { username, email, password } = req.body;
  const isValidUsername = validateUsername(username);
  const isValidEmail = validateEmail(email);
  const isValidPassword = validatePassword(password);

  if (!isValidEmail || !isValidUsername || !isValidPassword) return res.status(400).json({ message: 'invalid data'});
  return res.status(201).json({ message: 'user created'});
};

module.exports = registerUser;