const Joi = require('joi');

const validate = (username, password) => {
  const schema = Joi.object({
    username: Joi.string()
      .alphanum()
      .min(5)
      .required(),
    password: Joi.string()
      .min(5)
      .required(),
  });

  const { error } = schema.validate({ username, password });
  return error;
};

module.exports = (req, res, next) => {
  const { username, password } = req.body;

  const isValid = validate(username, password);
  if (isValid) {
    return res.status(400).json({ message: isValid.details[0].message });
  }

  next();
};