const validateInfos = (firstName, lastName, email, password) => {
  if (!firstName || !lastName || !email || !password) return 'Todos os campos são obrigatórios';
  return false;
};

const validatePassword = (password) => {
  if (typeof password !== 'string') return 'O campo password deve ser uma string';
  if (password.length < 6) return 'O campo password deve ter pelo menos 6 caracteres';
  return false;
}

const validateUser = (req, _res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const isValidInfos = validateInfos(firstName, lastName, email, password);
  const isValidPassword = validatePassword(password);

  if (isValidInfos) {
    return next({
      code: 400,
      "message": isValidInfos
    })
  };

  if (isValidPassword) {
    return next({
      code: 400,
      "message": isValidPassword
    })
  }

  return next()
};

module.exports = validateUser;