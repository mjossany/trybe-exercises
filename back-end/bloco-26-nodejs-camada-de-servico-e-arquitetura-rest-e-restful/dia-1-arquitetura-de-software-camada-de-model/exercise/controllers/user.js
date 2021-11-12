const {
  insertUser,
  getUsers,
} = require('../models/User');

const createUser = async (req, res, _next) => {
  const { firstName, lastName, email } = req.body;
  const re = await insertUser(firstName, lastName, email);
  res.status(201).json({
    id: re.insertedId,
    firstName,
    lastName,
    email
  })
};

const getAllUsers = async (_req, res, _next) => {
  const re = await getUsers();
  if (re === null) return res.status(200).json([]);
  return res.status(200).json(re);
}

module.exports = {
  createUser,
  getAllUsers
};