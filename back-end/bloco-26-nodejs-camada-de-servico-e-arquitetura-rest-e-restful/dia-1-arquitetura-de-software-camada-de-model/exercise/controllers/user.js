const insertUser = require('../models/User');

const createUser = async (req, res, _next) => {
  const { firstName, lastName, email } = req.body;
  const re = await insertUser(firstName, lastName, email);
  res.status(201).json({
    id: re.insertedId,
    firstName,
    lastName,
    email
  })
}

module.exports = createUser;